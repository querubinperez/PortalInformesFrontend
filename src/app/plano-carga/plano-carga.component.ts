import {Component, OnInit} from '@angular/core';

import {Plano} from '../plano';
import {PlanoCargaService} from '../plano-carga.service';
import {MessageService} from '../message.service';
import {Sismed} from '../sismed';
import {SismedInformeService} from '../sismed-informe.service';


@Component({
  selector: 'app-plano-carga',
  templateUrl: './plano-carga.component.html',
  styleUrls: ['./plano-carga.component.css']
})
export class PlanoCargaComponent implements OnInit {

  displayedColumns: string[] = ['num_registro', 'idcargaventas', 'nit_cliente', 'codigo_producto',
    'cantidad_unidades_vendidas', 'valor_unitario', 'numero_factura', 'fecha_factura',
    'tipo_operacion'];

  fileContent: string;
  planos: Plano[];
  informeSismeds: Sismed[];

  constructor(private planoCargaService: PlanoCargaService,
              private informeSismedService: SismedInformeService,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  public onChange(fileList: FileList): void {
    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    const self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result as string;
    }
    fileReader.readAsText(file);
  }

  cargarPlano(dataPlano: string): void {
    dataPlano = dataPlano.trim();
    if (!dataPlano) {
      return;
    }
    // this.messageService.add(`PlanoCargaComponent: ${dataPlano}`);
    this.planoCargaService.addPlano({id: 0, data_plano: dataPlano} as Plano);
    this.planoCargaService.cargaPlano({id: 0, data_plano: dataPlano} as Plano)
      .subscribe(informe => {
        this.informeSismeds = informe;
        informe.forEach((element) => {
          this.informeSismedService.addSismed(element);
        });
      });
  }

}
