<template>
  <div class="home">
    <div class="inicio-esquerdo">
      <div style="margin: 20px">
        <div class="logo-marca">
          <p class="marca">Data<span style="color: #ffd700">On</span> Sistemas</p>
        </div>
        <div>
          <p class="texto-boas">{{ respostaCnpj }}</p>
        </div>
      </div>
    </div>
    <div class="inicio-direito">
      <div class="inicio-direito-header">
        <div class="inicio-direito-header-text">
        </div>
      </div>
      <div class="inicio-direito-body">
        <div class="formulario">
          <div class="p-fluid p-grid">
            <div class="p-field p-col-12 p-md-8">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Nome</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-4">
              <span class="p-float-label">
                <Calendar id="navigators" :monthNavigator="true" :yearNavigator="true" yearRange="2000:2030" />
                <label for="nome">Data Nascimento</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">CPF</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">RG</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Email</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Telefone</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Usuario</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Senha</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Confirma</label>
              </span>
            </div>
          </div>
          <div>
             <div class="p-field-checkbox">
            <Checkbox id="binary" :binary="true" />
            <label for="binary"><a class="link-termo" href="" > Li e Aceito os Termos de Uso </a></label>
        </div>
          </div>
          <div style="margin-top: 10px;margin-bottom:50px">
              <Button @click="onPagenext(1)" style="margin-top: 20px" label="Voltar" class="p-button-outlined p-button-secondary" />
              <Button style="margin-left:10px" label="Confirmar" class="p-button-outlined p-button-secondary" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Terceira.js">
</script>
<style lang="scss" scoped>
.link-termo{
  text-decoration: none;
}
.inicio-direito-header-text{
  margin: 10px;
}
.inicio-direito-header{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
}
.inicio-direito-body{
  display: flex;
  justify-content: center;
  height: 70%;
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
  width: 60%;
  background-color: #343433;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inicio-direito{
  width: 40%;
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
    height: auto;
  }
}
</style>
