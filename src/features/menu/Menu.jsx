import {getMenu} from "../../services/apiRestaurant.js";
import {useLoaderData} from "react-router-dom";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  const menu =   useLoaderData()
  return <>
      <h1>Menu</h1>
      <ul>{menu.map(p => <MenuItem key={p.id} pizza={p} />)}</ul>
  </>;
}

export async function loader(){
    const menu = await  getMenu();
    return menu;
}

export default Menu;
