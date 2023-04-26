import "./style.css";
import { Pokemon } from "./types/pokedex";

class FetchApi {
  url: string;

  constructor() {
    this.url = "https://pokeapi.co/api/v2/";
  }

  public async PokemonApi(id: number | string): Promise<Pokemon> {
    const response = await fetch(`${this.url}pokemon/${id}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Erro na requisição");
    }
  }
}

class Pokedex {
  pokemonAtual: number | string;
  fieldNumber: HTMLInputElement;
  fieldName: HTMLInputElement;
  imagePokemon: HTMLInputElement;
  btnNext: HTMLInputElement;
  btnPrev: HTMLInputElement;
  myApi: FetchApi;
  PokemonID: number;
  form: HTMLFormElement;
  input: HTMLFormElement;

  constructor() {
    this.fieldNumber = document.querySelector(".pokedex-field-number") as HTMLInputElement;
    this.fieldName = document.querySelector(".pokedex-field-pokemon-name") as HTMLInputElement;
    this.imagePokemon = document.querySelector(".pokemon") as HTMLInputElement;
    this.btnNext = document.querySelector(".btn-next") as HTMLInputElement;
    this.btnPrev = document.querySelector(".btn-prev") as HTMLInputElement;
    this.form = document.getElementById("my-form") as HTMLFormElement;
    this.input = this.form.querySelector(".pokedex-field-input")!;

    this.pokemonAtual = 2;
    this.PokemonID = 1;

    this.myApi = new FetchApi(); // cria uma instância de FetchApi
    this.updatePokemon(); // chama o método updatePokemon no construtor

    this.btnNext.addEventListener("click", () => {
      const adicionar = (this.PokemonID += 1);

      this.pokemonAtual = adicionar;
      this.updatePokemon();
    });
    this.btnPrev.addEventListener("click", () => {
      if (this.PokemonID > 1) {
        const adicionar = (this.PokemonID -= 1);

        this.pokemonAtual = adicionar;
        this.updatePokemon();
      } else {
        return;
      }
    });

    this.form.addEventListener("submit", (event) => {
      event.preventDefault(); // previne que a página seja recarregada
      const value = this.input.value;

      this.pokemonAtual = value;
      if (value) {
        this.updatePokemon();
        console.log(value); // exibe o valor do input no console
      }
    });
  }

  async updatePokemon() {
    const pokemon = await this.myApi
      .PokemonApi(this.pokemonAtual)
      .then((pokemon) => {
        const htmlID = `
        ${pokemon.id}
        `;
        const htmlName = `
        ${pokemon.name}
        `;
        const htmlImage = `
        <img src="${pokemon.sprites["back_default"]}"/>
        `;
        this.fieldNumber.innerHTML = htmlID;
        this.fieldName.innerHTML = htmlName;
        this.imagePokemon.innerHTML = htmlImage;
        this.PokemonID = pokemon.id;
      })
      .catch((error) => {
        console.error("deu um erro");
        this.fieldName.innerHTML = `404`;
        this.fieldNumber.innerHTML = `not found`;
      });
  }
}

const domPokedex = new Pokedex();
