import { Component, OnInit } from '@angular/core';
import {store, appState} from '../../store';
import {ACTION_usernameIsFocussed,ACTION_usernameNotFocussed,ACTION_usernameValueChanged,ACTION_passwordIsFocussed,ACTION_passwordNotFocussed,ACTION_passwordValueChanged} from '../../store/actions'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  
  public username:string ="";
  public password:string ="";
  public displayState:appState;

  ngOnInit(){
    this.updateFromState();
    store.subscribe(()=>{
    console.log("State Updated!");
    this.updateFromState();
    });
  }

  SubmitForm(){
    alert("Username: "+this.username+"\n Password: "+this.password);
  }

  updateFromState(){
    this.displayState = store.getState();
    this.username = this.displayState.username.value;
    this.password = this.displayState.password.value;
  }

  usernameIsFocussed(){
    store.dispatch(ACTION_usernameIsFocussed());
  }
  passwordIsFocussed(){
    store.dispatch(ACTION_passwordIsFocussed());
  }
  usernameNotFocussed(){
    store.dispatch(ACTION_usernameNotFocussed());
  }
  passwordNotFocussed(){
    store.dispatch(ACTION_passwordNotFocussed());
  }
  usernameValueChanged(){
    store.dispatch(ACTION_usernameValueChanged(this.username));
  }
  passwordValueChanged(){
    store.dispatch(ACTION_passwordValueChanged(this.password));
  }
}
