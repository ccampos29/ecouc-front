import { Component, OnInit } from "@angular/core";
import { ChatService } from "./chat.service";
import Pusher from "pusher-js";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  listaUsuario = [];
  userReceiveId: null;
  user = null;
  message = "";
  messages = [];
  private pusherClient: Pusher;

  constructor(private chatService: ChatService) {
    this.getUser();
    this.pusherClient = new Pusher("f2becd7560a32a501c51", { cluster: "us2" });
    var self = this;
    var channel = this.pusherClient.subscribe("my-chat");
    channel.bind("send-message", function (data) {
      if (data["userReceive"] === self.user["id"]) {
        self.messages.push({
          userId: data["userSend"],
          message: data["message"],
        });
        // alert(data["message"]);
      }
    });
  }

  ngOnInit(): void {
    this.iniciarLista();
    this.getUser();
  }

  private getUser() {
    let data = JSON.parse(sessionStorage.getItem("credentials"));
    if (data) {
      this.user = data;
    }
  }

  iniciarLista() {
    this.chatService.getUsers().subscribe(
      (dataUsuarios) => {
        var lista = [];
        dataUsuarios.forEach((user, i) => {
          if (user.id != this.user["id"]) {
            lista.push(user);
          }
        });

        this.listaUsuario = lista;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectUserReceive(userReceiveId) {
    this.message = "";
    this.userReceiveId = userReceiveId;
  }

  sendMessage() {
    var self = this;
    const userSend = self.user["id"];
    if (self.message === "") return;

    self.messages.push({ userId: userSend, message: self.message });

    self.chatService
      .sendMessage(userSend, self.userReceiveId, self.message)
      .subscribe(
        (data) => {
          self.message = "";
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
