<template>
  <div>
   <nav class="navbar navbar-light sticky-top" style="background: linear-gradient(to right, #885AEB, #C358B9);">
  <a class="navbar-brand" href="#">
    <button type="button" @click="logout()" class="btn btn-link"><img src="../assets/logout.png" width="30" height="30" alt=""></button>
  </a>
   <a class="navbar-brand ml-auto" href="/history">
      <img src="../assets/history.png" width="30" height="30" alt="">
    </a>
</nav>

    <div class="about sticky-top">
    <h2 style="color:white">Welcome back! </h2>
    <p style="color:white"> Choose a city and a store to order flowers you like <br>
        for yourself  or whoever else you'd like! </p> <br>

      <div class="input-group mb-3 mx-auto" style="max-width: 300px;">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">City</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01" v-model="selectedOption">
          <option value="">Choose...</option>
          <option value="Pula">Pula</option>
          <option value="Zagreb">Zagreb</option>
          <option value="Osijek">Osijek</option>
          <option value="Slavonski Brod">Slavonski Brod</option>
          <option value="Split">Split</option>
        </select>
      </div> <br>
    </div>

    <div class="container">
      <div class="row">
        <div class="col" v-for="card in filteredShopCards" :key="card.id"> <br>
          <my-shop-card
            :image-source="card.imageSource"
            :title="card.title"
            :description="card.description"
            :link="card.link"
            :button-text="card.buttonText"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopCard from '@/components/ShopCard.vue'
import store from "@/store";
import { firebase } from "@/firebase";

export default {
  name: 'ShopCard',
  components: {
    'my-shop-card': ShopCard,
  },
  data() {
    return {
      selectedOption: '',
      shopCards: [
         {
          id: 1,
          city: 'Pula',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #1',
          description: 'Delivery: 1,20€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 1,
          city: 'Pula',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #2',
          description: 'Delivery: 1,30€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 1,
          city: 'Pula',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #3',
          description: 'Delivery: 1,00€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 2,
          city: 'Zagreb',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop 4#',
          description: 'Delivery: 1,10€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 2,
          city: 'Zagreb',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #5',
          description: 'Delivery: 1,40€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 2,
          city: 'Zagreb',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #6',
          description: 'Delivery: 1,30€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 3,
          city: 'Osijek',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #7',
          description: 'Delivery: 1,40€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 3,
          city: 'Osijek',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #8',
          description: 'Delivery: 1,50€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 3,
          city: 'Osijek',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #9',
          description: 'Delivery: 1,20€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 4,
          city: 'Slavonski Brod',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #10',
          description: 'Delivery: 1,00€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 4,
          city: 'Slavonski Brod',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #11',
          description: 'Delivery: 1,40€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 4,
          city: 'Slavonski Brod',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #12',
          description: 'Delivery: 1,20€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 5,
          city: 'Split',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #13',
          description: 'Delivery: 1,30€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 5,
          city: 'Split',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #14',
          description: 'Delivery: 1,70€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        {
          id: 5,
          city: 'Split',
          imageSource: 'https://99percentinvisible.org/app/uploads/2019/02/abstract-background-colors.jpg',
          title: 'Flower shop #15',
          description: 'Delivery: 1,40€',
          link: '/flowershop',
          buttonText: 'Go to shop',
        },
        // ... (rest of your shopCards data)
      ],
      store,
    };
  },
  computed: {
    filteredShopCards() {
      if (!this.selectedOption) {
        return [];
      }
      return this.shopCards.filter((card) => {
        return card.city === this.selectedOption;
      });
    },
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'home' })
      });
    },
  },
};
</script>

<style scoped>
.about {
  background: linear-gradient(to right, #885AEB, #C358B9);
  width: 100%;
  border-bottom-left-radius: 100px; 
  border-bottom-right-radius: 100px;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
