<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <span v-if="loggedUser">
                <ul class="nav navbar-nav">
                    <li><a href="note">My Notes</a></li>
                </ul>
                <ul class="nav navbar-nav">
                    <li><a href="note#/?type=favourite" @click="changeNoteRoute">Favourite</a></li>
                </ul>
                <ul class="nav navbar-nav">
                    <li><a href="note#/create">Create</a></li>
                </ul>
            </span>
            <ul class="nav navbar-nav">
                <li><a href="user">Users</a></li>
            </ul>
            <ul class="nav navbar-nav pull-right" @click="logout">
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import axios from 'axios';
    import Flash from '../components/Flash';

    export default{
      components: {
        Flash,
      },
      name: 'Navbar',
      data() {
        return {
          loggedUser: {},
        }
      },
      mounted() {
        this.loggedUser = window.loggedUser;
      },
      methods: {
        logout() {
          axios.post('/logout')
            .then(() => {
              window.location.href = window.location.origin + '/login';
              this.$emit('flash', { message: 'You have been logged out.' });
            });
        },
        changeNoteRoute() {
          this.$emit('note-route-changed');
        }
      }
    }
</script>