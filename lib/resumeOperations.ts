import { db } from "./firebase";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { ResumeData, UserProfile, SkillSet, Project, Experience, Education, Achievement } from "@/types/resumeTypes";

export const getUserResumeData = async (userId: string): Promise<Partial<ResumeData>> => {
  // Try to load user profile
  const userSnap = await getDoc(doc(db, "users", userId));
  const user = userSnap.exists() ? { id: userSnap.id, ...userSnap.data() } as UserProfile : undefined;

  // Try to load skills
  const skillsSnap = await getDoc(doc(db, "skills", userId));
  const skills = skillsSnap.exists() ? { id: skillsSnap.id, ...skillsSnap.data() } as SkillSet : undefined;

  // Load sub-collections / collections
  const loadCollection = async <T>(colName: string): Promise<T[]> => {
    // We assume these are stored as root collections with userId field, to easily query them without complex sub-collection structure
    // Depending on DB design, we could use subcollections. Using root collection here.
    const querySnapshot = await getDocs(collection(db, colName));
    return querySnapshot.docs
      .map(d => ({ id: d.id, ...d.data() } as unknown as T))
      .filter((item: any) => item.userId === userId);
  };

  const projects = await loadCollection<Project>("projects");
  const experience = await loadCollection<Experience>("experience");
  const education = await loadCollection<Education>("education");
  const achievements = await loadCollection<Achievement>("achievements");

  return {
    user,
    skills,
    projects,
    experience,
    education,
    achievements,
  };
};

export const saveUserProfile = async (userId: string, data: Partial<UserProfile>) => {
  await setDoc(doc(db, "users", userId), data, { merge: true });
};

export const saveUserSkills = async (userId: string, data: Partial<SkillSet>) => {
  await setDoc(doc(db, "skills", userId), data, { merge: true });
};
