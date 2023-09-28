import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { insertView } from "@ionic/angular/directives/navigation/stack-utils";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { EquipamentoDTO } from "src/app/models/EquipamentoDTO";

@Injectable()
export class EquipamentoService {

    constructor(public http: HttpClient){

    }

    findAll(): Observable <EquipamentoDTO[]>{
        return this.http.get<EquipamentoDTO[]>(`${API_CONFIG.baseUrl}/equipamentos`);

    }
    insertView(equipamento:EquipamentoDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/equipamentos`, equipamento,{observe:'response',
    responseType:'text'});
    }
}