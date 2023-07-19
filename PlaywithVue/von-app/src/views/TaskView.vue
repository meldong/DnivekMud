<template>
  <div class="task pa-6">
    <Appbar />
    <h1>Task</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit harum
      dignissimos explicabo nobis exercitationem animi totam iusto ratione
      corporis dolore inventore, quaerat ipsam perferendis dolorem sed quidem
      alias magnam?
    </p>
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask()"
      @keyup.enter="addTask()"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>
    <v-list flat class="pt-0">
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Appbar from "../components/Appbar";

export default {
  name: "Task",

  components: {
    Navbar,
    Footer,
    Appbar,
  },

  data: () => ({
    newTaskTitle: "",
    tasks: [
      //   { id: 1, title: "Wake up", done: false },
      //   { id: 2, title: "Do cleaning", done: false },
      //   { id: 3, title: "Have breakfast", done: false },
    ],
  }),

  methods: {
    addTask() {
      let newTask = { id: Date.now(), title: this.newTaskTitle, done: false };
      this.tasks.push(newTask);
      this.newTaskTitle = "";
      console.log("addTask id: " + newTask.id + ", title: " + newTask.title);
    },
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
      console.log("doneTask id: ", id);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      console.log("deleteTask id: ", id);
    },
  },
};
</script>
