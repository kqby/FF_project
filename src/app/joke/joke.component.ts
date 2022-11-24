import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor() { }

  szoveg =[ ]

  ngOnInit(): any {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(tartalom => {
        this.szoveg = tartalom.value;

      })
  }



}
