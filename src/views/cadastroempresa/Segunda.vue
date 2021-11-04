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
            <div class="p-field p-col-12 p-md-6">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Nome ou Fantasia</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Razao Social</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Inscrição estadual</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Inscrição Municipal</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Cnae</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
              <span class="p-float-label">
                <Dropdown v-model="form.regime" :options="regimes" optionLabel="descricao" optionValue="id"/>
                <label for="nome">Regime</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
              <span class="p-float-label">
                <label for="nome">Cep</label>
                <div class="p-inputgroup">
                  <InputText id="nome"/>
                  <Button icon="pi pi-search" class="p-button-outlined p-button-secondary"/>
                </div>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-6">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Endereço</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Numero</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-3">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Bairro</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-4">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Complemento</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-4">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">Cidade</label>
              </span>
            </div>
            <div class="p-field p-col-12 p-md-1">
              <span class="p-float-label">
                <InputText id="nome" type="text"/>
                <label for="nome">UF</label>
              </span>
            </div>
          </div>
          <div style="margin-top: 10px">
              <Button @click="onPagenext(1)" style="margin-top: 20px" label="Voltar" class="p-button-outlined p-button-secondary" />
              <Button @click="onPagenext(3)" style="margin-left:10px" label="Avançar" class="p-button-outlined p-button-secondary" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Segunda.js">
</script>
<style lang="scss" scoped>
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
  width: 40%;
  background-color: #343433;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inicio-direito{
  width: 60%;
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
