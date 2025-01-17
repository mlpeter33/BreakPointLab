import * as fs from 'fs';

/**
 * Generates a dangerous file for testing security features.
 * 
 * @param filePath - Path to save the dangerous file.
 * @param type - Type of dangerous file (e.g., 'fakeExecutable', 'oversized', 'misleadingContent', 'scriptInjection').
 * @param options - Additional options for file generation.
 */
export const generateDangerousFile = (
    filePath: string,
    type: 'fakeExecutable' | 'oversized' | 'misleadingContent' | 'scriptInjection',
    options: { sizeInMB?: number; extension?: string; content?: string } = {}
  ): void => {
    const { sizeInMB = 5, extension = 'exe', content } = options;
  
    let fileContent: Buffer;
  
    switch (type) {
      case 'fakeExecutable':
        fileContent = Buffer.from('This is not a valid executable.', 'utf-8');
        break;
  
      case 'oversized':
        fileContent = Buffer.alloc(sizeInMB * 1024 * 1024, 0); 
        break;
  
      case 'misleadingContent':
        fileContent = Buffer.from(content || 'This is not an image!', 'utf-8');
        break;
  
      case 'scriptInjection':
        fileContent = Buffer.from('<script>alert("This is a test!");</script>', 'utf-8');
        break;
  
      default:
        throw new Error(`Unsupported dangerous file type: ${type}`);
    }
  
    const dangerousFilePath = `${filePath}.${extension}`;
    fs.writeFileSync(dangerousFilePath, fileContent);
  
    console.log(`Dangerous file generated: ${dangerousFilePath}`);
  };
  
 /* Example Usage
  generateDangerousFile('./fake_executable', 'fakeExecutable', { extension: 'exe' }); // Fake .exe file
  generateDangerousFile('./oversized_file', 'oversized', { sizeInMB: 50, extension: 'txt' }); // Oversized file (50 MB)
  generateDangerousFile('./misleading_image', 'misleadingContent', { extension: 'jpg', content: 'This is not a real image!' }); // Misleading .jpg file
  generateDangerousFile('./script_file', 'scriptInjection', { extension: 'html' }); // File with script injection */