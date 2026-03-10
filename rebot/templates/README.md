# Document Templates Directory

Place your `.docx` resume templates here. 

The API route `/api/generate-resume` looks for a file named exactly:
**`resume_template.docx`**

## How it works

The system uses [docxtemplater](https://docxtemplater.com/) to find tags within your `.docx` file and replaces them with data from your React app state.

### Tag Syntax
In your Word document, format tags with curly braces:
- `{user.name}`
- `{user.email}`
- `{user.personalStatement}`

For loops (like experience):
```text
{#experience}
{company} - {role}
{startDate} to {endDate}
{description}
{/experience}
```

Make sure to upload an actual Word Document (`.docx`) before triggering the Download functionality in the Resume Builder.
