public abstract class AbstractBuilding{
    private int year;
    private int floors_number;
    private String wall_material;

    public AbstractBuilding (int year, int floors_number,String wall_material) {
        this.year=year;
        this.floors_number=floors_number;
        this.wall_material=wall_material;
    }
    public int getFloors_number() {
        return floors_number;
    }
}