import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }
  listaProdutos = [] as Produto[]

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos(){
    this.produtoService.getProdutos().subscribe((produtosRecebidos: Produto[]) => {
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos)
    })
  }

}
