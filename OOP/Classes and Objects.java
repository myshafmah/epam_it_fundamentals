class Building{
    String purpose;
    String adress;
    int floors_number;
    private string wallMaterial;

    public Duilding()
    {
        this.purpose=" ";
        this.adress=" ";
        this.floors_number=0;
        this.wallMaterial=" ";
    }
    public Building(String purpose, String adress, int floors_number,String wallMaterial) {
        this.purpose=purpose;
        this.adress=adress;
        this.floors_number=floors_number;
        this.wallMaterial=wallMaterial;
    }
    public void setWallMaterial (String wallMaterial) {
        this.wallMaterial=wallMaterial;
    }
    public String getInfo() {
        return("The purpose is" + purpose + ".\n Adress: " + adress +".\n Number of floors: "
        + floors_number+"and wall material is " + wallMaterial);
    }
}


public class Execute{
    public static void main(String[] args) {
        Building cafe=new Building();
        cafe.purpose="organisation of recreation";
        cafe.adress="London Baker street";
        cafe.floors_number = 2;
        cafe.wallMaterial("brick");
        System.err.println("Information abut cafe: \n" +cafe.getInfo());

        Building shop=new Building("Organisation of shopping", "London Crawford street", 1, "wood");
        System.out.println("Information abut the shop: \n" + shop.getInfo()); 
    }
}