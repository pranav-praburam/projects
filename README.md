import java.util.Scanner;

public class hello_world {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); //creates new scanner
        System.out.print("Enter a number between 1 and 4999: "); 
        int num = input.nextInt();

        //defines bounds
        if (num < 1 || num > 4999) { //edge cases for numbers lower than one and higher than 4999
            System.out.println("Invalid input. Number must be between 1 and 4999.");
        } else { //all cases that fall within bounds
            System.out.println(convertToRoman(num));
        }
    }

    public static String convertToRoman(int num) {
        String roman = ""; //empty string initialized
        //numeric values array ordered respective to symbols array
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}; 
        String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

        for (int i = 0; i < values.length; i++) { //for loop that traverses values array
            while (num >= values[i]) { //while user value is greater than the given index in the values array
                num -= values[i]; //the user's number will be subtracted by the given index in the values array
                roman += symbols[i]; //the corresponding symbols to the values array, will be added to the empty string
            }
        }
        return roman; //returns the empty string after values have been appended onto it
    }
}
