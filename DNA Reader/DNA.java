/**
* Pranav Praburam
* ppraburam@brandeis.edu
* February 16, 2022
* PA#2
* My program will allow users to choose between two text files, and will process the information onto another output file. 
* Known Bugs: none */

package main;
import java.io.*;
import java.util.Scanner;
import java.util.Arrays;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
public class DNA {

	public static void main(String[] args) throws IOException { 
		String finalOutput = ""; 
		String name = "null Name";
		String nucleotides = "null nuc.";
		//initializes variables
		try {
			Scanner scanscan = new Scanner(System.in); 
			String inputFilename, outputFilename;
			System.out.println("This program reports information about DNA");
			System.out.println("nucleotide sequences that may encode proteins.");
			//BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
			System.out.println("Input file name?");
			inputFilename = scanscan.nextLine();
			File inputFile = new File(inputFilename);
			Scanner reader = new Scanner(inputFile);
			System.out.println(inputFile);
//takes user input file names from the user
			
			System.out.println("Output file name?");
			outputFilename = scanscan.nextLine().trim();
			//gets output file name from user

			int lineCount = 0;// divide input into groups

			List<String> allLines = Files.readAllLines(Paths.get(inputFilename)); //reads content from input file

			for (String line : allLines) { 
				System.out.println(line);
				lineCount++;
				if (lineCount % 2 == 0) { // it's name line
					name = "Region name: " + line;
					//the region name is outputted
				} else {
					nucleotides = "Nucleotides: " + line.toUpperCase();
					String bigOutput = calculate(line); //calculate method is used to calculate instances of nucleotides
					finalOutput += name + "\n" + nucleotides + "\n" + bigOutput + "\n"; //what's outputted on the output.txt
				}

				System.out.println(lineCount);
			}

			try (PrintWriter writer = new PrintWriter(outputFilename)) {
				writer.println(finalOutput); //output file is written
			}
		}
		catch (IOException e) { //catches errors in the filename 
			e.printStackTrace(); //prints any error spotted by the exception
		}
	}

	public static String calculate(String strnucs) {
		System.out.println(strnucs);
		strnucs = strnucs.toUpperCase(); 
		double[] mass = new double[4]; //mass array is initialized
		int[] nnucCount = new int[4]; //nucleotide array is initialized
		double dtotalMass = 0; //mass is initialized
		String strforCodon = strnucs.replaceAll("-", ""); //replaces junk characters
		String[] strcodonsArr = new String[strforCodon.length() / 3]; //codons r divided by 3
		String strcodon = ""; //codon is initialized
		int ncodonIndex = 0;
		for (int i = 0; i < strnucs.length(); i++) { //characters r converted from strings to char
			if (strnucs.charAt(i) != '-') {
				strcodon += strnucs.charAt(i);
			}
			if (strcodon.length() == 3) {
				strcodonsArr[ncodonIndex] = strcodon;
				strcodon = ""; // reset
				ncodonIndex++;
			}
			switch (strnucs.charAt(i)) { //masses of nucleotides are seperated into cases based on mass of each nucleotide
			case 'A': { // mass 135.128
				nnucCount[0] = nnucCount[0] + 1;
				dtotalMass += 135.128;
				break;
			}
			case 'C': { // mass 111.103 
				nnucCount[1] = nnucCount[1] + 1;
				dtotalMass += 111.103;
				break;
			}
			case 'G': { // mass 151.128
				nnucCount[2] = nnucCount[2] + 1;
				dtotalMass += 151.128;
				break;
			}
			case 'T': { // mass 125.107
				nnucCount[3] = nnucCount[3] + 1;
				dtotalMass += 125.107;
				break;
			}
			case '-': {// mass 100.00
				dtotalMass += 100.0;
				break;
			}
			default:
				break;
			}
		}

		int[] a = {1, 2, 3, 4}; //nucleotide counts
		double[] nuc = {135.128, 111.103, 111.103,111.103}; //masses 

		for (int i = 0; i < nnucCount.length; i++) { // round value
			mass[i] = Math.round((((nuc[i] + 1) * nnucCount[i]) / dtotalMass) * 1000.0) / 10.0;
		}
		// final clear up
		String strnucCounts = "Nuc. Counts: " + Arrays.toString(nnucCount);
		String strtotalMass = "Total Mass%: " + Arrays.toString(mass) + " of " + Math.round(dtotalMass * 10.0) / 10.0;
		String strcodonsList = "Codons List:" + Arrays.toString(strcodonsArr);
		String strisProtein = "";
		
		System.out.println(Arrays.toString(strcodonsArr));
		if (strcodonsArr[0].equals("ATG")) { //ATG is stop codon, so the end of the line is reached at this point
			String last = strcodonsArr[strcodonsArr.length - 1];
			if (last.equals("TAA") || last.equals("TAG") || last.equals("TGA")) {
				strisProtein = "YES"; //if the last nucleotide is any of the above, it's a protein ...
			} else {
				strisProtein = "NO"; // ...otherwise it's not
			}
		} else {
			strisProtein = "NO";
		}
		strisProtein = "Is Protein?: " + strisProtein;
		String strtoReturn = strnucCounts + "\n" + strtotalMass + "\n" + strcodonsList + "\n" + strisProtein;
		return strtoReturn;
	}

}
