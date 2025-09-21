# Custom Rankings Import Guide

The Rapid Journal Quality Check extension now supports importing your own custom journal rankings! This feature allows you to add specialized or institutional ranking systems alongside the built-in rankings.

## How to Use

### 1. Access the Options Page
- Click the extension icon in your browser toolbar
- Select "Settings" or right-click the extension and choose "Options"

### 2. Enable Custom Rankings
- Find the "Custom Rankings" section in the options page
- Toggle "Enable Custom Rankings" to ON
- Custom rankings will take priority over built-in rankings when enabled

### 3. Import Your Rankings

#### Option A: Upload a File
1. Click "Choose CSV or JSON file"
2. Select your ranking file
3. Click "Import"

#### Option B: Paste Data
1. Copy your ranking data
2. Paste it into the text area
3. Click "Parse Data"

## Supported Formats

### CSV Format
Requires a header row with column names. Supported columns:
- **ISSN** (or issn): Journal ISSN number
- **Name** (or journal): Journal name
- **Rank** (or rating): The ranking value (required)
- **Description** (optional): Additional information

**Example:**
```csv
ISSN,Name,Rank,Description
1234-5678,Test Journal of Computer Science,A*,Top-tier research journal
5678-1234,International Review of Business,A,High-quality business journal
9999-0000,Sample Economics Quarterly,B,Good economics journal
```

### JSON Format

#### Simple Format
```json
{
  "1234-5678": "A*",
  "5678-1234": "A",
  "Example Journal Name": "B"
}
```

#### Array Format
```json
[
  {
    "issn": "1234-5678",
    "name": "Test Journal of Computer Science", 
    "rank": "A*",
    "description": "Top-tier research journal"
  },
  {
    "issn": "5678-1234",
    "name": "International Review of Business",
    "rank": "A"
  }
]
```

#### Object Format
```json
{
  "1234-5678": {
    "name": "Test Journal of Computer Science",
    "rank": "A*",
    "description": "Top-tier research journal"
  },
  "Example Journal": {
    "rank": "B",
    "description": "Good journal"
  }
}
```

## How It Works

### Lookup Priority
1. **Custom rankings** (if enabled) are checked first
2. If no custom ranking found, built-in rankings are used
3. Custom rankings can be identified by the "C:" prefix in search results

### Matching
The system matches journals by:
1. **ISSN** (exact match, ignoring formatting)
2. **Journal name** (case-insensitive, normalized)

### Storage
- Rankings are stored in Chrome sync storage
- Data syncs across devices when signed into Chrome
- Custom rankings are kept separate from built-in rankings

## Ranking Values

The system supports common ranking scales:
- **A\***, **A+**, **A**, **B**, **C**, **D**
- **Q1**, **Q2**, **Q3**, **Q4** (quartiles)
- **1**, **2**, **3**, **4** (numeric scales)
- Any custom values you prefer

## Tips

1. **ISSN Format**: ISSNs can be with or without hyphens (1234-5678 or 12345678)
2. **Journal Names**: Use the exact name as it appears in Google Scholar for best matching
3. **Backup**: Export your custom rankings periodically as JSON for backup
4. **Testing**: Use the "Current custom rankings: X entries" display to verify import success

## Management

### Clear All Rankings
- Click "Clear All" to remove all custom rankings
- Confirm the action when prompted

### Status Messages
- Green messages indicate success
- Red messages indicate errors
- Check the entry count to verify your data was imported

## Troubleshooting

### Import Errors
- **"CSV must contain either ISSN or journal name column"**: Add proper header row
- **"CSV must contain a rank/rating column"**: Ensure rank column exists
- **"Error parsing data"**: Check JSON syntax or CSV formatting

### No Rankings Showing
1. Verify "Enable Custom Rankings" is ON
2. Check that journals match your imported data
3. Look for "C:" prefix indicating custom rankings

## Example Use Cases

- **Institutional Rankings**: Import your university's preferred journal list
- **Conference Rankings**: Add conference proceedings rankings
- **Specialized Fields**: Include niche ranking systems for your research area
- **Combined Rankings**: Create composite rankings from multiple sources

For support, please check the extension documentation or report issues on the GitHub repository.