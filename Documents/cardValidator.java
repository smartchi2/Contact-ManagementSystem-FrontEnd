import java.util.List;
import java.util.*;

public class Main {
    //public int count;
    public static String cardsnumber;
    public static String cardtype;
    static List<Integer> multicardnumber = new ArrayList();

    public static void main(String[] args) {
        parameter();
        multiplicarray();
    }


    public static void parameter() {


        Scanner scanner = new Scanner(System.in);
        // tell the user to enter an integer
        System.out.println("Enter your card number: ");
        //save the input on variable names cardsnumber as a string
        cardsnumber = scanner.nextLine();

        
        if (cardsnumber.charAt(0) == '3' && cardsnumber.charAt(1) == '7') {
            cardtype = "American express cards";
        } else if (cardsnumber.charAt(0) == '5') {
            cardtype = "Mastercard";
        } else if (cardsnumber.charAt(0) == '6') {
            cardtype = "Discover cards";
        } else if (cardsnumber.charAt(0) == '4') {
            cardtype = "visa cards";
        } else {
            cardtype = "invalid card";
        }
        System.out.println(cardtype);
        System.out.println(cardsnumber);
    }

    //int cardnumberasstring = Integer.parseInt(cardsnumber);
    int lengthOfNumber = cardsnumber.length();
    public static void multiplicarray() {
        int cardnumberasstring = Integer.parseInt(cardsnumber);
        for(int i = cardsnumber.length() - 2; i >= 0; i--){
            int digit = Integer.parseInt(String.valueOf(cardsnumber.charAt(i)));
            multicardnumber.add(2 * digit);
        }System.out.print(multicardnumber);

    }

}