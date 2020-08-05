<template>
  <div class="container-fluid my-3">
    <div class="row">
      <div class="col" v-if="responseResult == 1">
        <div class="alert alert-success">
            <strong>Le payment est fait avec succès.</strong>
        </div>
      </div>
      <div class="col text-center" v-else>
        <b-form @submit="formSubmit">
          <div role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1 btn" role="tab">
                <h3 href="#" v-b-toggle.accordion-1 variant="info">Custumor Informations <span v-if="errors[0]" class="text-muted" style="font-size:15px"><b style="color:red">* Errors</b></span></h3>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <div class="container">
                    <div class="row mb-3">
                      <div class="col-lg-4 col-md-3"></div>
                      <div class="col-lg-2 col-md-3 text-left pt-1">
                        <b>Custumor ID :</b>
                      </div>
                      <div class="col-lg-3 col-md-4 text-left">
                        <b-input v-model="payment.custumorID.val" :state="payment.custumorID.state" type="text" id="custumorID" class="form-control" required />
                        <b-form-invalid-feedback :state="payment.custumorID.state">
                          Enter Custumor ID.
                        </b-form-invalid-feedback>
                      </div>
                      <div class="col-lg-3 col-md-2"></div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-lg-4 col-md-3"></div>
                      <div class="col-lg-2 col-md-3 text-left pt-1">
                        <b>
                          Amount (<span style="color:green">$</span>) :
                        </b>
                      </div>
                      <div class="col-lg-3 col-md-4 text-left">
                        <b-input v-model="payment.amount.val" :state="payment.amount.state" type="text" id="amount" class="form-control" required />
                        <b-form-invalid-feedback :state="payment.amount.state">
                          Enter Amount.
                        </b-form-invalid-feedback>
                      </div>
                      <div class="col-lg-3 col-md-2"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4 mx-auto">
                      <b-card-text class="my-2">
                        <b-button
                          block
                          href="#"
                          v-b-toggle.accordion-2
                          variant="info"
                          class="btn">send informations</b-button>
                      </b-card-text>
                    </div>
                  </div>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1 btn" role="tab">
                <h3 href="#" v-b-toggle.accordion-2 variant="info">Payment Mode  <span v-if="errors[1]" class="text-muted" style="font-size:15px"><b style="color:red">* Errors</b></span></h3>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <b-form-group>
                      <template v-for="pm in paymentMethods">
                        <b-form-radio size="lg" :key="pm.paymentid" v-model="paymentMethod" name="some-radios" :value="pm.paymentid">{{ pm.title }}</b-form-radio>
                        <template v-if="paymentMethod == pm.paymentid">
                          <component :is="paymentComponents[pm.paymentid]" :inputvals="inputs[pm.paymentid-1]" :image="pm.image" :key="pm.paymentid"></component> 
                        </template>
                      </template>
                    </b-form-group>
                    <div class="mt-3" style="color:red" v-if="unselectedPaymentMethod"><b>Select a payment Method!</b></div>
                    <b-button href="#" v-b-toggle.accordion-3 variant="info">send informations</b-button>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1 btn" role="tab">
                <h3 href="#" v-b-toggle.accordion-3 variant="info">Make payment  <span v-if="errors[2]" class="text-muted" style="font-size:15px"><b style="color:red">* Errors</b></span></h3>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <div class="container">
                     <div class="row">
                       <div class="col-5 mx-auto">
                         <div class="row p-2">
                          <div class="col-md-6 text-left">
                            Custumor ID :
                          </div>
                          <div class="col-md-6 text-left text-muted font-weight-bold">
                              {{ payment.custumorID.val }}
                          </div>
                         </div>
                         <div class="row p-2">
                          <div class="col-md-6 text-left">
                            Amount :
                          </div>
                          <div class="col-md-6 text-left text-muted font-weight-bold">
                              {{ payment.amount.val }}
                          </div>
                         </div>
                         <div class="row p-2">
                          <div class="col-md-6 text-left">
                            Payment method :
                          </div>
                          <div class="col-md-6 text-left text-muted">
                              <template v-if="paymentMethod != 0">
                                <img :src="paymentMethods[paymentMethod-1].image" style="vertical-align: middle" />
                              </template>
                          </div>
                         </div>
                       </div>
                     </div>
                  </div>
                  <b-button type="submit" variant="primary">Submit</b-button>
                  <div v-if="loading" class="mt-2">Sending....</div>
                  <div v-if="anerror" class="mt-2" style="color: red">
                    <b><i class="fas fa-exclamation-triangle"></i> Une erreur est produite</b>
                  </div>
                  <div v-if="responseResult == 2" class="mt-2" style="color: red">
                    <b><i class="fas fa-exclamation-triangle"></i> Transaction non ajoutée</b>
                  </div>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MakePayment",
  data() {
    return {
      payment:{
        custumorID: {
          val: 0,
          state: null
        },
        amount: {
          val: 0,
          state: null
        }
      },
      responseResult: 0,
      anerror: false,
      loading: false,
      paymentMethod: 0,
      paymentMethods: [],
      errors: [false, false, false],
      unselectedPaymentMethod: false,
      paymentComponents:['PaymentEmpty', 'PaymentPaypal', 'PaymentGiftCard'],
      inputs: [
        {
          email:{
            val: "",
            state: null
          }
        },
        {
          code:{
            val: "",
            state: null,
            state1: null,
            state2: null,
            state3: null,
            state4: null
          }
        }
      ]
    }
  },
  methods: {
    formSubmit(e){
      e.preventDefault();
    }
  }
};
</script>
