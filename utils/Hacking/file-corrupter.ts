// they see me hakin they hatin

import * as fs from 'fs';

/**
 * Corrupts a file by changing a random byte.
 * 
 * @param filePath - Path to the file to corrupt.
 * @param outputFilePath - Path to save the corrupted file.
 * @param options - Corruption options.
 *    - truncatePercent: Percentage of the file to corrupt (0-100).
 *    - randomizePercent: Percentage of random corruption (0-100).
 */

export const corruptFile = (
    filePath: string,
    outputFilePath: string,
    options: {
      truncatePercent?: number;
      randomizePercent?: number;
    } = {}
  ): void => {
    const { truncatePercent = 0, randomizePercent = 0 } = options;
  
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
  
    const fileBuffer = fs.readFileSync(filePath);
    const fileSize = fileBuffer.length;
  
    let corruptedBuffer = Buffer.from(fileBuffer);
  
    // Apply random corruption
    if (randomizePercent > 0) {
      const bytesToRandomize = Math.floor((randomizePercent / 100) * fileSize);
      for (let i = 0; i < bytesToRandomize; i++) {
        const randomIndex = Math.floor(Math.random() * fileSize);
        corruptedBuffer[randomIndex] = Math.floor(Math.random() * 256);
      }
    }
  
    // Apply truncation
    if (truncatePercent > 0) {
      const bytesToKeep = Math.floor((1 - truncatePercent / 100) * fileSize);
      corruptedBuffer = Buffer.from(corruptedBuffer.slice(0, bytesToKeep));
    }
  
    // Save the corrupted file
    fs.writeFileSync(outputFilePath, corruptedBuffer);
  
    console.log(
      `Corrupted file generated: ${outputFilePath} (Truncated: ${truncatePercent}%, Randomized: ${randomizePercent}%)`
    );
  };

/* Example Usage
corruptFile('./dummy.pdf', './corrupted_dummy.pdf', { truncatePercent: 20, randomizePercent: 10 }); // Corrupt 10% and truncate 20%
corruptFile('./dummy.jpg', './corrupted_dummy.jpg', { randomizePercent: 30 }); // Corrupt 30% of the image
*/