import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0
  images = [
    {
      title: 'At the beach',
      src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'At Taj Mahal',
      src: `https://media.istockphoto.com/photos/taj-mahal-agra-india-picture-id525811038?b=1&k=20&m=525811038&s=170667a&w=0&h=rzlRiZeMJz2nyDIjgwtbQipIiuBA9un_dzUebC1iWmc=`
    },
    {
      title: 'At New York',
      src: 'https://media.istockphoto.com/photos/new-york-city-nyc-usa-picture-id615398376?b=1&k=20&m=615398376&s=170667a&w=0&h=v59Pfuvn4jTqysv0RYKsYhoUM_ayitgQIsG8cFg3rM8='
    }
  ]

}
