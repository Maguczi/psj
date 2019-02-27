import Components from './Components/Components';

export const fetchRouters = async () => {
  try {
    const response = await fetch(
      'https://psj1-7d856.firebaseio.com/routes.json'
    );
    const json = await response.json();

    const filteredJson = json.filter(el => {
      return el != null;
    });

    const mappedJson = filteredJson.filter(el => {
      el['component'] = Components[el['component']];
      return el;
    });

    return mappedJson;
  } catch (e) {
    console.error(e);
  }
};