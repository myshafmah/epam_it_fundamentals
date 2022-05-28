public abstract class ResidentialBuilding extends AbstractBuilding {

  private int parking_floors;

  public ResidentialBuilding(
    int year,
    int floors_number,
    String wall_material,
    int parking_floors
  ) {
    super(year, floors_number, wall_material);
    this.parking_floors = parking_floors;
  }
@Override
  public int getFloors_number() {
      return (super.getFloors_number() + parking_floors);
  }
}
