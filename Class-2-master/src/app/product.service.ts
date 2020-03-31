import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';


const products = [
  {"id":1,"title":"Ipsa itaque rerum sint porro.","anons":"Consectetur dolorem nisi qui voluptatem libero sapiente non. Delectus eveniet accusantium aliquam consequatur ducimus quae nobis. Quo sit iusto illo corporis nobis repellat reiciendis.","desc":"Duchess said in a sulky tone; 'Seven jogged my elbow.' On which Seven looked up eagerly, half hoping she might as well say,' added the Dormouse, not choosing to notice this last remark. 'Of course.","price":"479","image":"https:\/\/picsum.photos\/200\/300","created_at":"2020-03-26T08:48:58.000000Z","updated_at":"2020-03-26T08:48:58.000000Z"},{"id":2,"title":"Et est iusto doloremque quia nihil ut molestias.","anons":"Quia beatae maiores repellendus consequatur nesciunt. Inventore quo eum autem modi possimus. Quisquam doloribus repellendus odio qui. Maxime qui assumenda exercitationem voluptas.","desc":"Hatter with a table in the night? Let me see--how IS it to be sure! However, everything is to-day! And yesterday things went on eagerly: 'There is such a thing I know. Silence all round, if you cut.","price":"268","image":"https:\/\/picsum.photos\/200\/300","created_at":"2020-03-26T08:48:58.000000Z","updated_at":"2020-03-26T08:48:58.000000Z"},{"id":3,"title":"Provident quidem debitis excepturi commodi.","anons":"Impedit nihil vitae harum et earum perferendis cum. Vel vel ullam quos incidunt eius sequi occaecati.","desc":"The pepper when he sneezes; For he can thoroughly enjoy The pepper when he finds out who was sitting next to no toys to play croquet with the next thing was waving its tail when I'm angry. Therefore.","price":"104","image":"https:\/\/picsum.photos\/200\/300","created_at":"2020-03-26T08:48:58.000000Z","updated_at":"2020-03-26T08:48:58.000000Z"}]


@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(
  private httpClient:HttpClient,

) { }
loadAll(){
  return of(products)
  return this.httpClient.get("http://iilinov-n.myjino.ru/products")
}
loadById(id){
  return this.httpClient.get('http://iilinov-n.myjino.ru/products/' + id);
}

}
