<template>
    <div class="alert alert-error shadow-lg">
        <div>
            <IconCircleX :size="24" />
            <span>{{ props.message }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconCircleX } from '@tabler/icons-vue'

const props = defineProps<{
    message: string
}>();

</script>

<style scoped></style>
