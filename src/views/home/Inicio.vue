<template>
  <div class="home">
    <div class="inicio-esquerdo">
      <div>
        <div class="logo-marca">
          <p class="marca">Data<span style="color: #ffd700">On</span> Sistemas</p>
        </div>
        <div>
          <p class="texto-boas">Olá Seja bem vindo(a) a DataOn</p>
          <p class="texto-boas">Queremos da-lo(a) as boas vindas e dizer que você é muiiiito especial pra gente</p>
          <p class="texto-boas">com esta parceria você irá perceber que unindo a tecnologia com o que você ja tem de melhor,</p>
          <p class="texto-boas">no seu PetShop, Clinica ou Hospital, você não estará fazendo só bem aos seus clientes</p>
          <p class="texto-boas">mas também aos seus pets que merecem tuuudo de melhor que se pode oferecer.</p>
        </div>
      </div>
    </div>
    <div class="inicio-direito">
      <div class="inicio-direito-header">
        <div class="inicio-direito-header-text">
          <p class="texto-cadastro">Esta parte é um pouco chatinha e sabemos,
            mas para que possamos promover uma experiencia
            cada vez mais cada vez melhor precisamos de alguns dados de sua empresa, mas não se preoculpe caso seja
            CNPJ conseguimos quase todos os dados</p>
        </div>
      </div>
      <div class="inicio-direito-body">
        <div class="formulario">
          <div class="p-fluid">
            <span class="p-float-label">
              <InputMask :unmask="true" slotChar=" " v-model="form.cnpj" :mask="mascara"/>
              <label for="username">Cnpj/Cpf</label>
            </span>
            <div style="margin-top: 20px">
              <Button @click="onPagenext(2)" label="Avançar" class="p-button-outlined p-button-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Inicio.js">
</script>
<style lang="scss" scoped>
.inicio-direito-header-text{
  margin: 10px;
}
.inicio-direito-header{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
}
.inicio-direito-body{
  display: flex;
  justify-content: center;
  height: 50%;
}
.texto-cadastro{
  font-size: 20px;
  color: #000000;
  text-justify: 10px;
}
.area-forms{
  width: 100%;
}
.formulario{
  width: 90%;
}
.texto-boas{
  font-size: 20px;
  padding: 5px;
}
.logo-marca{
  margin-bottom: 50px;
}
.marca{
  font-size: 80px;
}
.home{
  height: 100%;
  width: 100%;
  display: flex;
}
.inicio-esquerdo{
  color: white;
  width: 70%;
  background-color: #343433;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inicio-direito{
  width: 30%;
  height: 100%;
  background-color: rgba($color: #df9c00 , $alpha: 1.0);
  background: linear-gradient(135deg, #ffd700 0%,#df9c00 100%);
}
@media screen and (max-width: 740px) {
  .home{
    display: block;
  }
  .inicio-esquerdo{
    width: 100%;
    height: 100%;
  }
  .inicio-direito{
    width: 100%;
  }
}
</style>
