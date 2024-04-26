public class Function1{
  public static boolean isEven(int number){
  
   if(number % 2 == 0) return true;
   else if(number % 2 != 0) return false;
 }
 public static void main(String...args){
 System.out.print(isEven(4));

}
}