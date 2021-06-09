let year=window.document.getElementById('ano')
let ano=new Date()
let anoss=ano.getFullYear()
let resp=document.querySelector('p#res')

function verificar(){

    if(year.value.length == 0 || year.value > anoss){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        sexo() 
          
    }
}

function sexo(){
    let sexo=document.getElementsByName('readsex')
    let idade=anoss-Number(year.value)
    let genero = sexo[0].checked ? "masculino" : "feminino"
    let imagem=document.getElementById('imga')

    resp.innerHTML=`Olá, você tem <strong>${idade} anos</strong> e seu sexo é<strong> ${genero}</strong>`

    if(genero=='masculino'){
        if(idade<=15){
            imagem.style.backgroundImage = "url('meninoC.jpeg')"
            
        }else if(idade>15 && idade<=18){
            imagem.style.backgroundImage = "url('adolescenteH.jpeg')"
            
        }else if(idade>18 && idade<=70){
            imagem.style.backgroundImage = "url('homemA.jpg')"
            
        }else{
            imagem.style.backgroundImage = "url('idoso.jpeg')"
            
        }
        
    }else{
        if(idade<=15){
            imagem.style.backgroundImage = "url('meninaC.jpeg')"
            
        }else if(idade>15 && idade<=18){
            imagem.style.backgroundImage = "url('adolescenteM.jpeg')"
        }else if(idade>18 && idade<=70){
            imagem.style.backgroundImage = "url('mulherA.jpeg')"
        }else{
            imagem.style.backgroundImage = "url('idosa.jpeg')"
        }
        
    }
}
