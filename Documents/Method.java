import java.util.Scanner;

public class AccountTest{
public String getname(){
   return name:// this is set to be the return type to
 the caller as we move you will understand.

Scanner input = new Scanner(System.in);// here we just imported Scanner for more clerification


Account myAccount = new Account();

System.out.printf("Initial name is: %s%n%n", myAccount.getname());// here you are getting the 
name from the first getname that was why you had 
to add myAccount.getname to be able to access it.

System.out.println("Please input your name: ");// here you are prompting
 the user to enter name. 
String thename = input.nextLine();// here you store what you are going 
to recieve from the user.

System.out.printf("name in object myAccount is:%n%s%n", myAccount.getname());// We are displaying what we got from the user
 using our getname with myAccount.
  }
}

