

import { Container, Segment, Button, Header, Icon, Grid, Popup } from 'semantic-ui-react'

const initAnimals = [
    {
        "name": "Cheetah",
        "taxonomy": {
            "kingdom": "Animalia",
            "phylum": "Chordata",
            "class": "Mammalia",
            "order": "Carnivora",
            "family": "Felidae",
            "genus": "Acinonyx",
            "scientific_name": "Acinonyx jubatus"
        },
        "locations": [
            "Africa",
            "Asia",
            "Eurasia"
        ],
        "characteristics": {
            "prey": "Gazelle, Wildebeest, Hare",
            "name_of_young": "Cub",
            "group_behavior": "Solitary/Pairs",
            "estimated_population_size": "8,500",
            "biggest_threat": "Habitat loss",
            "most_distinctive_feature": "Yellowish fur covered in small black spots",
            "gestation_period": "90 days",
            "habitat": "Open grassland",
            "diet": "Carnivore",
            "average_litter_size": "3",
            "lifestyle": "Diurnal",
            "common_name": "Cheetah",
            "number_of_species": "5",
            "location": "Asia and Africa",
            "slogan": "The fastest land mammal in the world!",
            "group": "Mammal",
            "color": "BrownYellowBlackTan",
            "skin_type": "Fur",
            "top_speed": "70 mph",
            "lifespan": "10 - 12 years",
            "weight": "40kg - 65kg (88lbs - 140lbs)",
            "height": "115cm - 136cm (45in - 53in)",
            "age_of_sexual_maturity": "20 - 24 months",
            "age_of_weaning": "3 months"
        }
    }
]
export default function AnimalCard({ animals = initAnimals }) {
    return (
        <div>
            {
                animals.map((animal, index) => {
                    return (
                        <div className="card" key={`animal-card-${index}`} >
                            <Container>
                                <Header as='h2' attached='top' className='text-align-center'>
                                    Animal
                                </Header>
                            </Container>
                            <Container>
                                <Segment className="text-align-left">
                                    <h1>{animal.name}</h1>
                                    <h3>Taxonomy:</h3>
                                    <p><strong>Kingdom:</strong> {animal.taxonomy.kingdom}</p>
                                    <p><strong>Phylum:</strong> {animal.taxonomy.phylum}</p>
                                    <p><strong>Class:</strong> {animal.taxonomy.class}</p>
                                    <p><strong>Order:</strong> {animal.taxonomy.order}</p>
                                    <p><strong>Family:</strong> {animal.taxonomy.family}</p>
                                    <p><strong>Genus:</strong> {animal.taxonomy.genus}</p>
                                    <p><strong>Scientific Name:</strong> {animal.taxonomy.scientific_name}</p>
                                    <br />
                                    <h3>Locations:</h3><p>{animal.locations}</p>
                                    <br />
                                    <h3>Characteristics:</h3><p></p>
                                    <p><strong>Prey:</strong> {animal.characteristics.prey}</p>
                                    <p><strong>Name of young:</strong> {animal.characteristics.name_of_young}</p>
                                    <p><strong>Group behavior:</strong> {animal.characteristics.group_behavior}</p>
                                    <p><strong>Estimated population size:</strong> {animal.characteristics.estimated_population_size}</p>
                                    <p><strong>Biggest threat:</strong> {animal.characteristics.biggest_threat}</p>
                                    <p><strong>Most distinctive feature:</strong> {animal.characteristics.most_distinctive_feature}</p>
                                    <p><strong>Gestation period:</strong> {animal.characteristics.gestation_period}</p>
                                    <p><strong>Habitat:</strong> {animal.characteristics.habitat}</p>
                                    <p><strong>Diet:</strong> {animal.characteristics.diet}</p>
                                    <p><strong>Average litter size:</strong> {animal.characteristics.average_litter_size}</p>
                                    <p><strong>Lifestyle:</strong> {animal.characteristics.lifestyle}</p>
                                    <p><strong>Common name:</strong> {animal.characteristics.common_name}</p>
                                    <p><strong>Number of species:</strong> {animal.characteristics.number_of_species}</p>
                                    <p><strong>Location:</strong> {animal.characteristics.location}</p>
                                    <p><strong>Slogan:</strong> {animal.characteristics.slogan}</p>
                                    <p><strong>Group:</strong> {animal.characteristics.group}</p>
                                    <p><strong>Color:</strong> {animal.characteristics.color}</p>
                                    <p><strong>Skin_type:</strong> {animal.characteristics.skin_type}</p>
                                    <p><strong>Top_speed:</strong> {animal.characteristics.top_speed}</p>
                                    <p><strong>Lifespan:</strong> {animal.characteristics.lifespan}</p>
                                    <p><strong>Weight:</strong> {animal.characteristics.weight}</p>
                                    <p><strong>Height:</strong> {animal.characteristics.height}</p>
                                    <p><strong>Age of sexual maturity:</strong> {animal.characteristics.age_of_sexual_maturity}</p>
                                    <p><strong>Age of weaning:</strong> {animal.characteristics.age_of_weaning}</p>
                                    <Grid.Column className="text-align-right">
                                        <Popup
                                            trigger={<Button icon>
                                                <Icon name='plus' />
                                            </Button>}
                                            content='Save me in your profile!'
                                            position='top right'
                                        />
                                    </Grid.Column>
                                </Segment>
                            </Container>
                            <br />
                            <Container>

                                <Header as='h2' attached='top' className='text-align-center'>
                                    All Post about the {animal.name}
                                </Header>

                                <Container>

                                    {/* <Post /> */}
                                    {/* Här behöver söka alla djur som fick den label som den djur namn */}
                                    {/* Behöver här Post innehål??? */}
                                </Container>
                            </Container>
                        </div >
                    )
                })
            }
        </div >
    )
}
