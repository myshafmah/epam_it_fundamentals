class Building:
    wall_material = "brick"

    def __init__(self, purpose, adress, Floors_number):
        self.purpose = purpose
        self.adress = adress
        self.Floors_number = Floors_number

    def __str__(self):
        return f"""The purpose is {self.purpose}. Adress: {self.adress}. Number of floors: {self.Floors_number} and wall material is {self.wall_material}"""


cafe = Building('organization of recreation', 'London, Baker street', 2)
print("\nInformation about cafe:")
print(cafe)
shop = Building("organization of shopping", "London, Crawford street", 1)
print("\nInformation about the shop:")
print(shop)
