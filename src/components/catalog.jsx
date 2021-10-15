import { useEffect, useState } from "react";

import "./catalog.css";
import Item from "./item";
import DataService from "../Services/dataService";

const Catalog = () => {
    const [itemList, setItemList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);

    const loadCatalog = () => {
        //create an issue of the service
        //call the method
        let service = new DataService();
        let catalog= service.getCatalog();
        console.log("the data", catalog);

        // find the list of unique categories
        let cats = [];
        for(let i=0; i < catalog.length; i++){
            let prod = catalog[i];
            //if the category doesnt exist inside the cats array
            //add it
            if(!cats.includes(prod.category)){
                cats.push(prod.category);
            }
        }

        console.log("unique cats",cats);
        setCategories(cats);

        setItemList(catalog);
        setItemsToDisplay(catalog);
    };

    const test1 = () => {
        console.log("Test 1");
        let nums = [1, 3, 4213, 2873, 456, 1, 23, 5, 346, 875, 345, 123, 345, 123, 2345, 12, 3, 546, 768, 789];
    
        // console log an array with the unique numbers
        let res = [];
        for(let i=0; i < nums.length; i++){
            let n = nums[i];
            if(!res.includes(n)){
            res.push(n);
            }
        }
        console.log(res);
      };
    
      const handleFilter = (cat) => {
          console.log("Filter",cat);

          setItemsToDisplay([]);


          let results = [];
          for(let i=0; i< itemList.length; i++){
              let prod = itemList[i];
              if(prod.category === cat){
                  results.push(prod);
              }
          }

          setItemsToDisplay(results);
      };

      const resetFilter = () => {
          setItemsToDisplay(itemList);
      };

    useEffect(() => {
        loadCatalog();
        // do something else
        test1();
    }, []);

    return (
    <div className="catalog">
        <h1>Our amazing catalog</h1>
        <h3>Currently have {itemList.length} products</h3>


        <div className="filters">
            <button onClick={resetFilter} className="btn btn-sm btn-info">All</button>

            {categories.map((cat) => (
                <button onClick={ () => {handleFilter(cat)}} className="btn btn-sm btn-info">{cat}
                </button>
            ))}

        </div>

        {itemsToDisplay.map((prod)=> (
             <Item data={prod}></Item> 
        ))}
    </div>
    );
};

export default Catalog;


