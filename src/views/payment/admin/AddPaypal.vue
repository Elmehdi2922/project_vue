<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col text-left">
            <div class="wrapper">
                <AdminSideBar />
                <!-- Content -->
                <div id="content">
                    <div class="card">
                        <div class="card-header text-center">
                            <h3>Add Paypal Account</h3>
                        </div>
                        <div class="card-body text-left">
                            <form @submit="formSubmit">
                                <PaypalForm :paypalAcc="paypalAccount" :violations="anerror.violations" />
                                <div v-if="loading" class="py-2">Sending....</div>
                            </form>
                            <div class="alert alert-danger text-left my-2" v-if="anerror.isError">
                                <i class="fas fa-exclamation-triangle"></i> <b>{{ anerror.title }}</b>
                                <div class="text-muted">
                                    {{ anerror.detail }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import AdminSideBar from "@/components/payment/admin/AdminSideBar.vue";
import PaypalForm from "@/components/payment/admin/PaypalForm.vue";
export default {
    name: "AddPaypal",
    components: {
        AdminSideBar,
        PaypalForm
    },
    beforeMount(){
        Object.assign(this.anerror, this.initialErrors);
    },
    data() {
        return {
            loading: false,
            initialErrors: {
                isError: false,
                title: "",
                detail: "",
                violations:{
                    email: null,
                    emailViolations: []
                }
            },
            anerror: {},
            paypalAccount: {
                email: "",
                sandboxmode: 1,
                transactionmethod: 0
            },
        };
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            this.loading = true;
            Object.keys(this.anerror.violations).forEach(item => {
                if(Array.isArray(this.anerror.violations[item])){
                    this.anerror.violations[item] = [];
                }else if(typeof this.anerror.violations[item] === "boolean"){
                    this.anerror.violations[item] = null;
                }
            });
            this.anerror = {};
            Object.assign(this.anerror, this.initialErrors);
            const params = new URLSearchParams();
            params.append('email', this.paypalAccount.email);
            params.append('sandboxmode', this.paypalAccount.sandboxmode);
            params.append('transactionmethod', this.paypalAccount.transactionmethod);
            axios.post(this.paymentService + 'payments/paypalAdmin/addPaypal', params)
            .then(response => {
                var theResponse = response.data;
                if(theResponse.status == "inserted"){
                    this.$router.push({ name: "Paypal" });
                }
                else if(theResponse.errors){
                    theResponse.errors.forEach((item)=>{
                        if(item.source.pointer == "email"){
                            this.anerror.violations.email = false;
                            this.anerror.violations.emailViolations.push(item.detail);
                        }
                    });
                }
                else{
                    this.anerror.isError = true;
                    this.anerror.title = theResponse.title;
                    this.anerror.detail = theResponse.detail;
                    console.log(theResponse);
                }
            })
            .catch(error => {
                this.anerror.isError = true;
                if(error.response){
                    this.anerror.title = error.response.data.message
                }else{
                    this.anerror.title = error;
                }
            })
            .finally(() => {
                this.loading = false;
            });
        }
    }
}
</script>
