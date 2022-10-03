import { BeerVolume } from "./beer-volume";

export interface Beer {
    id             :number;
    name           :string;
    tagline        :string;
    first_brewed   :string;
    description    :string;
    volume         :BeerVolume;
    image_url      :string;
    food_pairing   :Array<string>
    brewers_tips   :string;
    contributed_by :string ;
}


