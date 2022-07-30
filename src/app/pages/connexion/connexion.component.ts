import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  
  isAuth: boolean = false
  isLoading: boolean = false

  // formGroup!: FormGroup

  constructor() {

  }

  ngOnInit(): void {
    this.initForm()
  }

 initForm() {
  //   this.formGroup = this.form.group({
  //     login: ['', [Validators.required, Validators.email]],
  //     motDePasse: ['', [Validators.required]]
  //   })

 }

  submit() {
    // this.isLoading = true;
    // const login = this.formGroup.value['login']
    // const mp = this.formGroup.value['motDePasse']
    // setTimeout(() => {

    //   this.serviceauth.connexion(login, mp).then((user: any) => {
    //     if (user.err) {
    //       this.isAuth = true
    //       this.isLoading = false;
    //       return
    //     }

    //     this.isAuth = false
    //     this.isLoading = false;
    //     const utilisateur = {
    //       nom: user.utilisateur.prenom + " " + user.utilisateur.nom,
    //       email: user.utilisateur.email,
    //       telephone: user.utilisateur.telephone,
    //       adresse: user.utilisateur.adresse

    //     }
    //     const roleuser = user.utilisateur.profil
    //     localStorage.setItem('807605274673228623802113__luxdev-access-token', user.token)
    //     localStorage.setItem('user', JSON.stringify(utilisateur))
    //     localStorage.setItem('roleuser', JSON.stringify(roleuser))
    //     switch (user.utilisateur.profil) {
    //       case 'admin':
    //         this.routes.navigate(['/espace'])
    //         break;
    //       case 'vendeur':
    //         this.routes.navigate(['/creer-vente'])
    //         break;
    //       case 'client':
    //         this.routes.navigate(['/'])
    //         break;
    //     }
    //     return
    //   })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }, 2000)
  }

}
