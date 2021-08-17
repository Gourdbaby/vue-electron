<template>
  <div>
    <span>葫芦娃</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    
  }
})
</script>


<style lang='scss'>
div{
  span{
    color: red;
  }
}
</style>

<script>
   var data = [
    {
      "id": "1",
      "sub": [
        {
          "id": "2",
          "sub": [
            {
              "id": "3",
              "sub": null
            },
            {
              "id": "4",
              "sub": [
                {
                  "id": "6",
                  "sub": null
                }
              ]
            },
            {
              "id": "5",
              "sub": null
            }
          ]
        }
      ]
    },
    {
      "id": "7",
      "sub": [
        {
          "id": "8",
          "sub": [
            {
              "id": "9",
              "sub": null
            }
          ]
        }
      ]
    },
    {
      "id": "10",
      "sub": null
    }
  ]
  function name(data, id) {
    const res = []
    function recurit (node, nodeId) {
      if(node.sub){
        for(let i = 0; i < node.sub.length; i++){
          if(node.sub[i].id === nodeId){
            res.unshift(nodeId)
            recurit(node, node.id)
          }else{
            recurit(node.sub, nodeId)
          }
        }
      }
    }
    data.forEach(item => {
      recurit(item, id)
    })
  }
</script>