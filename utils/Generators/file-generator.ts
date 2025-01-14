import * as fs from 'fs';
import * as path from 'path';

/**
 * Generates a dummy file for upload testing.
 * 
 * @param filePath - Path to save the generated file.
 * @param sizeInKB - Size of the file in kilobytes.
 * @param extension - File extension (e.g., "txt", "jpg", "pdf").
 * @param content - Optional content for the file (only for text-based files).
 */
export const generateFile = (
  filePath: string,
  sizeInKB: number,
  extension: string,
  content?: string
): void => {
  let fileContent: Buffer;

  if (content && extension === 'txt') {
    fileContent = Buffer.from(content.repeat(sizeInKB * 1024 / content.length), 'utf-8');
  } else {
    fileContent = Buffer.alloc(sizeInKB * 1024, Math.random() * 255);
  }

  const fileName = `${filePath}.${extension}`;
  fs.writeFileSync(fileName, fileContent);

  console.log(`File generated: ${fileName} (${sizeInKB} KB)`);
};

/* Example Usage
generateFile('./dummy', 10, 'txt', 'Test content'); // 10 KB text file
generateFile('./dummy_image', 500, 'jpg');          // 500 KB image
generateFile('./dummy_pdf', 1024, 'pdf');           // 1 MB PDF
*/