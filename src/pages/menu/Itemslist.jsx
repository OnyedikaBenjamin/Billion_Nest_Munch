import React, { useState } from "react";
import "./itemslist.css";
import searchicon from "../../assets/search.png";
import favouriteicon from "../../assets/like.png";
import returnicon from "../../assets/back.png";

const Itemslist = () => {
  // -----------------------------------------------------------------------------------------------
  const foodArray = [
    {
      category: "BREAKFAST",
      imageSrc:
        "https://unpeeledjournal.com/wp-content/uploads/2023/04/52828009702_809417b444_b.jpg",
      items: [
        [
          "FULL ENGLISH BREAKFAST",
          "₦4384",
          "Fine toast, bacon, sausage, sunny side up, sauteed tomatoes/orange, lettuce served witH coffee/tea/glass of juice",
        ],
        [
          "NIGERIAN BREAKFAST",
          "₦3763",
          "Boiled yam or plantain with egg sauce served with coffee/tea/glass of juice",
        ],
        [
          "SANDWICH & FRIES",
          "₦3763",
          "Egg sandwich with French fries served with tea/coffee/glass of juice",
        ],
        ["TEA/COFEE", "₦1O75", ""],
      ],
    },
    {
      category: "PASTA",
      imageSrc:
        "https://sugarspunrun.com/wp-content/uploads/2022/07/Summer-Garden-Pasta-1-of-1.jpg",
      items: [
        ["STIRFRY", "₦2795", "Spaghetti glazed in vegetables"],
        ["NAPOLITANO", "₦2795", "Spaghetti glazed in sauce and vegetables"],
        [
          "SEAFOOD",
          "₦7525",
          "Spaghetti glazed in vegetables with shrimps and calamari",
        ],
        [
          "ALFREDO",
          "₦7525",
          "Linguine pasta with chopped chicken breast and cream",
        ],
      ],
    },
    {
      category: "SALAD",
      imageSrc:
        "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-008.jpg",
      items: [
        ["COLESLAW", "₦1613", "Nicely sliced veggies with cream"],
        [
          "AVOCADO SALAD",
          "₦4384",
          "Nicely sliced veggies with avocado with cream",
        ],
        [
          "AVOCADO CHICKEN SALAD",
          "₦6450",
          "Nicely sliced veggies with avocado and chicken breast with cream",
        ],
      ],
    },

    {
      category: "RICE",
      imageSrc:
        "https://cheflolaskitchen.com/wp-content/uploads/2018/10/Jollof-Rice-17.jpg",
      items: [
        [
          "JOLLOF RICE",
          "₦2688",
          "Smokey and spicy basmati rice from fine herbs and spices with blends of fresh peppers and tomatoes",
        ],
        ["FRIED RICE", "₦2688", "Basmati rice singed with fine vegetables"],
        [
          "COCONUT RICE",
          "₦2688",
          "Basmati rice singed with fine vegetables and coconut flavour",
        ],
        [
          "WHITE RICE",
          "₦2688",
          "Boiled basmati rice served with vegetable sauce",
        ],
        [
          "OFADA RICE",
          "₦5375",
          "Hot ofada rice served with plantain and ofada sauce",
        ],
        [
          "OFADA RICE",
          "₦6998",
          "Full package(ofada rice served with ofada sauce, plantain and fish in batter)",
        ],
      ],
    },
    {
      category: "GRILLS",
      imageSrc:
        "https://www.bellanaija.com/wp-content/uploads/2022/04/maxresdefault-50.jpeg",
      items: [
        [
          "ZESTY FLAME-GRILLED CATFISH",
          "₦8600",
          "Grilled spicy catfish glazed with fine vegetables served with either chips/yam/plantain",
        ],
        [
          "ZESTY FLAME-GRILLED CROAKER",
          "₦7525",
          "Grilled spicy croaker glazed with fine vegetables served with either chips/yam/plantain",
        ],
        [
          "FLAME-GRILLED CHICKEN",
          "₦4384",
          "Grilled spicy chicken served with hot sauce",
        ],
        [
          "FLAME-GRILLED TURKEY",
          "₦4384",
          "Grilled spicy turkey served with hot sauce",
        ],
        [
          "FLAME-GRILLED CHICKEN WINGS",
          "₦3763",
          "Grilled spicy chicken wings served with hot sauce",
        ],
        [
          "FLAME-GRILLED HONEY-GLAZED CHICKEN WINGS",
          "₦4384",
          "Grilled chicken wings glazed with honey served with dip of choice",
        ],
      ],
    },
    {
      category: "FINGER FOOD",
      imageSrc:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Rosemary-polenta-bites-e1d593e.jpg",
      items: [
        ["FRENCH FRIES", "₦2473", "Potato chips"],
        ["YAM CHIPS", "₦2473", "Finely chopped Yam"],
        ["PLANTAIN", "₦5375", "Finely sliced plantain"],
        [
          "GIZZDODO",
          "₦5375",
          "Peppered gizzard and plantain glazed in veghetable sauce",
        ],
      ],
    },
    {
      category: "PROTEIN",
      imageSrc:
        "https://www.usnews.com/cmsmedia/da/d2/08675cc445eb95cf450da94adc96/gettyimages-1155240408.jpg",
      items: [
        ["PEPPERED CHICKEN LAP", "₦4384", "Chicken lap glazed in pepper sauce"],
        ["PEPPERED TURKEY", "₦4384", "Turkey glazed in pepper sauce"],
        [
          "PEPPERED CHICKEN WINGS",
          "₦3763",
          "Chicken wings glazed in pepper sauce",
        ],
        [
          "CREAMY CRISPY WINGS",
          "₦4384",
          "Cripsy battered chicken wings served with sweet and sour dip",
        ],
        ["PEPPERED GIZZARD", "₦3763", "Gizzard glazed with pepper sauce"],
        ["PEPPERED SNAIL", "₦6450", "Snail glazed with sauce and veggies"],
      ],
    },
    {
      category: "SPECIALS/WEEKEND FLAVOUR",
      imageSrc:
        "https://c.ndtvimg.com/2020-09/2sff5d6o_gujarati_625x300_10_September_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
      items: [
        ["ASUN", "₦3763", "Rosted Goatmeat in hot peppersauce with veggies"],
        ["GOATMEAT PEPPERSOUP", "₦3763", "Hot goatmeat peppersoup"],
        [
          "MOI-MOI La SPECIALE",
          "₦1613",
          "Bean pudding with fish corned beef and egg",
        ],
        ["NATIVE PASTA", "₦3000", "African flavoured spaghetti with Orisirisi"],
        [
          "NATIVE COCONUT RICE",
          "₦3000",
          "African flavoured coconut rice with crayfish",
        ],
        ["NATIVE RICE", "₦3000", "African flavoured rice with Orisirisi"],
      ],
    },
    {
      category: "PLATTERS",
      imageSrc:
        "https://i0.wp.com/realfoodonline.co.za/wp-content/uploads/2020/07/PLAT-3-JUST-FRUIT-PLATTER-3.jpg?fit=2268%2C2330&ssl=1",
      items: [
        [
          "FULL PROTEIN",
          "₦21,500",
          "Peppered chicken wings, peppered gizzard with yam, chips, and plantain served with dip and sauce",
        ],
        [
          "MINI PROTEIN",
          "₦12,900",
          "Peppered chicken wings, peppered gizzard with yam, chips, and plantain served with dip and sauce",
        ],
        [
          "SEAFOOD",
          "₦37,625",
          "Grilled or peppered Prawns, lobster, shrimps, crabs, yam, plantain and chips served with sweet and sour dip and ketchup",
        ],
        [
          "WINGS",
          "₦16,125",
          "All things wings, yam, plantain and chips served with dips and sauce",
        ],
        [
          "FISH",
          "₦21,500",
          "All things fish(croaker and catfish) with roasted plantain and corn served with dips and sauce",
        ],
      ],
    },
    {
      category: "EXTRA DIPS",
      imageSrc:
        "https://hungryhealthyhappy.com/wp-content/uploads/2021/09/Easy-Marie-Rose-Sauce-featured.jpg",
      items: [
        ["MAY ROSE SAUCE", "₦500", ""],
        ["MINT MAYO", "₦500", ""],
        ["SALSA", "₦500", ""],
        ["COCONUT CHILI", "₦500", ""],
      ],
    },
  ];
  // --------------------------------------------------------------------------------------------------
  const nonAlchoholArray = [
    {
      category: "NON-ALCHOHOL",
      imageSrc:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2023_04/3592233/230127-non-alc-vl-2x1.jpg",
      items: [
        ["CRANBERRY JUICE", "₦1613", "Nicely sliced veggies with cream"],
        ["CHIVITA ORANGE", "₦2150", ""],
        ["CHIVITA PINEAPPLE", "₦2150", ""],
        ["HOLLANDIA", "₦2150", ""],
        ["AMSTEL MALT", "₦2150", ""],
        ["MALTA GUINESS", "₦860", ""],
        ["SCHWEPPES", "₦860", "Tonic"],
        ["WATER", "₦538", ""],
      ],
    },
    {
      category: "SMOTHIES",
      imageSrc: "https://i.ytimg.com/vi/TsFpCObjzOk/maxresdefault.jpg",
      items: [
        ["STRAWBERRY PEACH", "₦4838", "Apple, Banana, Strawberry"],
        [
          "FRUIT LUSH",
          "₦2150",
          "Fresh apple, Pineapple, Berries, Orange, Banana",
        ],
        [
          "PASSION FASHION",
          "₦2150",
          "Fresh passion fruit, Passion fruit puree, Whipping Cream",
        ],
      ],
    },
    {
      category: "MILK SHAKES",
      imageSrc:
        "https://preppykitchen.com/wp-content/uploads/2021/04/Milkshake-Recipe-Card.jpg",
      items: [
        ["OREO", "₦5375", "Vanilla ice cream, Milk, Chocolate cookies"],
        [
          "STRAWBERRY",
          "₦4384",
          "Vanilla ice cream, Strawberry syrup, Strawberry puree",
        ],
        ["BLUE BEACH", "₦4384", "Vanilla ice cream, Milk, Blue curacao"],
      ],
    },

    {
      category: "MOCKTAILS",
      imageSrc:
        "https://suebeehomemaker.com/wp-content/uploads/2023/03/strawberry-mojito-mocktails-9.jpg",
      items: [
        [
          "SUMMER BREEZE",
          "₦3763",
          "Passion fruit syrup, Peach syrup, Orange juice, Pineapple juice, Lime juice, Grenadine syrup",
        ],
        [
          "WATERMELON POCOLOCO",
          "₦3763",
          "Watermelon syrup, apple juice, orange juice, orgeat syrup, top with energy drink ",
        ],
        [
          "PINEAPPLE LIME PUNCH",
          "₦3763",
          "Pineapple juice, lime juice, mango puree, elderflower syrup, vanilla syrup, sugar syrup",
        ],
        [
          "ORANGE & MANGO CRUSH",
          "₦3763",
          "Orange juice, pineapple juice, Peach syrup, strawberry syrup, banana syrup, mango puree, top with energy drink",
        ],
        ["VIRGIN MOJITO", "₦3763", "Mint leaves, Lime, Sugar top with sprite"],
        ["LEMONADE", "₦3763", "Lemon, elderflower syrup, sprite"],
        [
          "SUMMER BREEZE",
          "₦2688",
          "Orange juice, fanta, sprite, grenadine, dash of angustura bitters",
        ],
      ],
    },

    {
      category: "TIKI'S",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhTWUrGqRtrtuaaPQ-QytxXBcfgCl4mvGWA&usqp=CAU",
      items: [
        ["MAI TAI", "₦6450", "Vanilla ice cream, Milk, Chocolate cookies"],
        [
          "AFRICAN ZOMBIE",
          "₦6450",
          "White rum, dark rum, gold rum, absinthe, cinnamon syrup, grenadine, grapefruit syrup, lime juice",
        ],
        [
          "TIKI PUKA",
          "₦6450",
          "White rum, dark rum, spiced rum, grenadine, spiced syrup, lemon juice, orange juice",
        ],
      ],
    },
  ];
  const alchoholArray = [
    "VODKA",
    "TEQUILA",
    "ENERGY DRINK",
    "BITTERS",
    "LAGER BEER",
    "TOT/SHOT",
    "WHISKEY/WHISKY",
    "GIN",
    "CHAMPAGNE",
    "RED WINE",
    "WHITE WINE",
    "BRANDY/COGNAC",
    "SHOOTERS",
    "BELLINIS",
    "APPERATIVES & CREAM LIQUOR",
  ];
  const cocktailsArray = [
    {
      category: "FROZEN COCKTAILS",
      imageSrc:
        "https://insanelygoodrecipes.com/wp-content/uploads/2021/09/Frozen-Strawberry-Margarita-with-Lime-500x500.jpg",
      items: [
        [
          "APPLE MARGARITA",
          "₦4838",
          "Apple puree, passion fruit, lime juice, apple juice, sugar syrup, triple sec, tequila",
        ],
        [
          "STRAWBERRY MAGARITA",
          "₦4838",
          "Strawberry puree, tequila, triple sec, tequila, sugar syrup, lime juice",
        ],
        [
          "PINACOLADA",
          "₦4838",
          "Fresh pineapple, malibu, coconut milk, cream, lime juice, pineapple wedge",
        ],
        [
          "STRAWBERRY DAIQUIRI",
          "₦4838",
          "Strawberry, light rum, fresh lime juice, simple syrup",
        ],
        [
          "COCONUT PUNCH",
          "₦5375",
          "White rum, simple syrup, vanilla syrup, pineapple juice, coconut milk, Coconut syrup",
        ],
      ],
    },
    {
      category: "SIGNATURE COCKTAILS",
      imageSrc:
        "https://hips.hearstapps.com/hmg-prod/images/signature-party-drink-ideas-whisky-muse-1511374323.jpg",
      items: [
        [
          "JAVASCRIPT",
          "₦4838",
          "Vodka, raspberry or strawberry syrup, lime, ginger beer",
        ],
        [
          "TEQUILA TIKI",
          "₦4838",
          "Tequila, whiskey, banana syrup, peach syrup, orange juice, fime juice, dash of Angustura bitters",
        ],
        [
          "3 MILES TO ISLAND",
          "₦4838",
          "Malibu, vodka, pineapple juice, strawberry syrup, mango puree, triple sec, sugar syrup, lime juice, mint leaves",
        ],
        ["GLADIATOR", "₦4838", "Vodka, triple sec, bacardi,orange juice"],
        [
          "TAKE ME HOME",
          "₦4838",
          "Gin, white rum, vodka, tequila, blue curacao, lime juice",
        ],
        [
          "TEASE ME UP SCOTTY",
          "₦4838",
          "Gin, white rum, vodka, tequila, blue curacao, lime juice",
        ],
      ],
    },
    {
      category: "CLASSIC COCKTAILS",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3y5VbKYArFswupNgbqjBBc9AQbtXY45W03w&usqp=CAU",
      items: [
        [
          "LONG ISLAND",
          "₦4838",
          "Gin, white rum, silver tequila, vodka, triple sec, simple syrup, fresh lemon, orgeat syrup",
        ],
        [
          "WHISKEY SOUR",
          "₦4838",
          "Bourbon whiskey, elderflower syrup, egg white, lemon juice, lemon wedge",
        ],
        [
          "SEX ON THE BEACH",
          "₦4838",
          "Vodka, peach snapps, peach syrup, orange syrup, cranberry juice, simple syrup, lime juice",
        ],
        [
          "CLASSIC MOJITO",
          "₦4838",
          "White rum, simple syrup, club syrup, lime juice,mint leaves",
        ],
        ["MOSCOW MULE", "₦4838", "Vodka, ginger beer, lime juice"],
        [
          "THE COSMOPOLITAN",
          "₦4838",
          "Vodka, Cointreau, fresh lime juice, cranberry juice",
        ],
        [
          "BLACK RUSSIAN",
          "₦4838",
          "Vodka, kahlua, lime or lemon juice, top with coke",
        ],
      ],
    },
  ];
  const hookerArray = [
    {
      category: "SINGLE-PIPE SHISHA",
      imageSrc: "https://m.media-amazon.com/images/I/71ba2VDKX9S.jpg",
      items: [],
    },
    {
      category: "DOUBLE-PIPE SHISHA",
      imageSrc:
        "https://pictures-nigeria.jijistatic.com/77280338_MzAwLTMwMC1mOTBiYzJkYmU4.webp",
      items: [],
    },
    {
      category: "EXTRA COAL",
      imageSrc:
        "https://shisha.pl/eng_il_JAMAICA-EXTRA-SMALL-1Hose-Hookah-Shisha-Water-Pipe-Alpapcio-30cm-46.jpg",
      items: [],
    },
  ];
  const vapourArray = [];

  const menus = [
    "FOOD MENU",
    "NON ALCHOHOL",
    "ALCHOHOL",
    "COCKTAILS",
    "SHISHA/HOOKAH",
    "VAPOUR",
  ];

  let sub_cats = [];
  const sub_cats_items = [];
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const changeTheCategoryList = (indexOfMenu) => {
    if (indexOfMenu === 0) {
      return foodArray;
    } else if (indexOfMenu === 1) {
      return nonAlchoholArray;
    } else if (indexOfMenu === 2) {
      return alchoholArray;
    } else if (indexOfMenu === 3) {
      return cocktailsArray;
    } else if (indexOfMenu === 4) {
      return hookerArray;
    } else {
      return vapourArray;
    }
  };

  const [subItems, setSubItems] = useState([]);
  const [catDropDown, setCatDropDown] = useState([]);

  const handleTheItems = (indexOfMenu, index) => {
    console.log(
      `I have pressed ${changeTheCategoryList(indexOfMenu)[index].category}`
    );
    const items = changeTheCategoryList(indexOfMenu)[index].items;

    const itemsElements = items.map((item, i) => (
      <div className="items-list">
        <img
          className="item-list-image"
          src="https://sugarspunrun.com/wp-content/uploads/2022/07/Summer-Garden-Pasta-1-of-1.jpg"
        />
        <div className="other-info">
          <p className="item-name">{item[0]}</p>
          <p className="description">{item[2]}</p>
          <div className="to-buy">
            <p className="item-price">{item[1]}</p>
            <div className="add-button">ADD</div>
          </div>
        </div>
      </div>
    ));
    setSubItems(itemsElements);

    //   changeTheCategoryList(indexOfMenu).forEach((element) => {

    //   });
  };

  const [subCatsElements, setSubCatsElements] = useState([]);

  const handleTheCats = (indexOfMenu) => {
    const newSubCatsElements = changeTheCategoryList(indexOfMenu).map(
      (item, index) => (
        <div
          className="menu-item2"
          key={index}
          onClick={() => {
            handleTheItems(indexOfMenu, index);
          }}
        >
          <img alt="" draggable="false" src={item.imageSrc} />
          <div className="menu-title">{item.category}</div>
        </div>
      )
    );

    setSubCatsElements(newSubCatsElements);
  };

  const [subCatsElementsItems, setSubCatsElementsItems] = useState([]);

  const changeTheActiveButton = (indexOfElement) => {
    setSelectedMenuIndex(indexOfElement);
  };
  const menus_snippets = menus.map((element, indexOfElement) => (
    <div
      key={indexOfElement}
      className={`menu-item ${
        indexOfElement === selectedMenuIndex ? "active-menu-button" : ""
      }`}
      onClick={() => {
        changeTheActiveButton(indexOfElement);
        handleTheCats(indexOfElement);
      }}
    >
      <div className="menu-title">
        <a className="menu-title-text" href="#">
          {element}
        </a>
      </div>
    </div>
  ));

  for (let i = 0; i < 2; i++) {
    sub_cats_items.push(
      <div className="items-cat" key={i}>
        <p className="menu-categories-title">STARTERS &amp; SHAREABLES</p>
        <div className="items-list">
          <img
            className="item-list-image"
            src="https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-008.jpg"
            alt=""
          />
          <div className="other-info">
            <p className="item-name">JUMBO COMBO VEG</p>
            <p className="description">
              A delectable array of our most popular veggie starters: Onion
              rings, potato skins, bruschetta and Southwest spring rolls.
            </p>
            <div className="to-buy">
              <p className="item-price">₦15500.00</p>
              <div className="add-button">ADD</div>
            </div>
          </div>
        </div>

        <div className="items-list">
          <img
            className="item-list-image"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-03072023070000475.jpeg?w=200&h=200"
            alt=""
          />
          <div className="other-info">
            <p className="item-name">JUMBO COMBO VEG</p>
            <p className="description">
              A delectable array of our most popular veggie starters: Onion
              rings, potato skins, bruschetta and Southwest spring rolls.
            </p>
            <div className="to-buy">
              <p className="item-price">₦15500.00</p>
              <div className="add-button">ADD</div>
            </div>
          </div>
        </div>
        <div className="items-list">
          <img
            className="item-list-image"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-03072023070000475.jpeg?w=200&h=200"
            alt=""
          />
          <div className="other-info">
            <p className="item-name">JUMBO COMBO VEG</p>
            <p className="description">
              A delectable array of our most popular veggie starters: Onion
              rings, potato skins, bruschetta and Southwest spring rolls.
            </p>
            <div className="to-buy">
              <p className="item-price">₦15500.00</p>
              <div className="add-button">ADD</div>
            </div>
          </div>
        </div>
        <div className="items-list">
          <img
            className="item-list-image"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-03072023070000475.jpeg?w=200&h=200"
            alt=""
          />
          <div className="other-info">
            <p className="item-name">JUMBO COMBO VEG</p>
            <p className="description">
              A delectable array of our most popular veggie starters: Onion
              rings, potato skins, bruschetta and Southwest spring rolls.
            </p>
            <div className="to-buy">
              <p className="item-price">₦15500.00</p>
              <div className="add-button">
                <div className="add">ADD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // ---------------------------------------------------------------------------------------------
  return (
    <div className="itemscontainer">
      <div className="fixedheader">
        <div className="left-header">
          <a className="" href="/Menucat">
            <img className="search-it" src={returnicon} alt="search-icon" />
          </a>
        </div>
        <div className="right-header">
          <div className="favourite">
            <img
              className="favourites"
              src={favouriteicon}
              alt="favourite-icon"
            />
          </div>
          <div className="search-bar" href="/Menucat">
            <img className="search-it" src={searchicon} alt="search-icon" />
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}
      <div className="mobile-container">{menus_snippets}</div>
      <div className="menu">{subCatsElements}</div>
      <div className="items-div">
        <div className="items-menu" id="EATS-MENU">
          {sub_cats_items}
        </div>
      </div>
    </div>
  );
};

export default Itemslist;

{
  /* <div className="items-cat">
          <p className="menu-categories-title">
            {changeTheCategoryList(indexOfMenu)[0].category}
          </p>
          <div className="items-list">
            <img
              className="item-list-image"
              src={changeTheCategoryList(indexOfMenu)[0].imageSrc}
              alt=""
            />
            <div className="other-info">
              <p className="item-name">{item[0]}</p>
              <p className="description">{item[2]}</p>
              <div className="to-buy">
                <p className="item-price">{item[1]}</p>
                <div className="add-button">ADD</div>
              </div>
            </div>
          </div>
        </div> */
}
