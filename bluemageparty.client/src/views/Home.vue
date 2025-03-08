<template>
    <v-container fluid class="home-page">
        <!-- Background Animation -->
        <div class="background-animation"></div>

        <!-- Main Content -->
        <v-row justify="center" align="center" class="main-content">
            <v-col cols="12" md="8" class="text-center">
                <!-- Title with Animation -->
                <h1 class="display-3 font-weight-bold mb-4 animated-title">
                    Blue Mage Party
                </h1>

                <!-- Subtitle with Animation -->
                <p class="headline mb-4 animated-subtitle">
                    The Ultimate Tool for Final Fantasy XIV Blue Mages
                </p>

                <!-- Centered Image -->
                <div class="image-container">
                    <img width="100px" src="@/assets/blue-mage.webp" alt="Blue Mage" />
                </div>
            </v-col>
        </v-row>

        <!-- Features Section -->
        <v-row class="features-section">
            <v-col cols="12" md="4" class="text-center">
                <v-icon color="#2064c4" size="64" class="mb-4">mdi-account-plus</v-icon>
                <h2 class="title mb-2">Claim Your Character</h2>
                <p class="body-1">
                    Start by claiming a character from the Lodestone. You can claim multiple characters if needed.
                </p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                <v-icon color="#2064c4" size="64" class="mb-4">mdi-book-open</v-icon>
                <h2 class="title mb-2">Mark Your Spells</h2>
                <p class="body-1">
                    Use the Spell Manager to mark which spells your character has learned.
                </p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                <v-icon color="#2064c4" size="64" class="mb-4">mdi-account-group</v-icon>
                <h2 class="title mb-2">Create a Party</h2>
                <p class="body-1">
                    Add characters to your party to see which spells are missing across the group.
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import gsap from 'gsap';

export default {
    name: 'Home',
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();

        // Redirect to Dashboard if logged in
        onMounted(() => {
            if (authStore.isAuthenticated) {
                router.push('/character/search');
            }

            // GSAP Animations
            gsap.from('.animated-title', {
                duration: 1.5,
                y: -50,
                opacity: 0,
                ease: 'power3.out',
            });

            gsap.from('.animated-subtitle', {
                duration: 1.5,
                y: 50,
                opacity: 0,
                ease: 'power3.out',
                delay: 0.5,
            });

            gsap.from('.features-section', {
                duration: 1.5,
                y: 50,
                opacity: 0,
                ease: 'power3.out',
                delay: 1.5,
            });
        });

        const navigateToDashboard = () => {
            router.push('/character/search');
        };

        return {
            navigateToDashboard,
        };
    },
};
</script>

<style scoped>
.home-page {
    position: relative;
    height: 100vh;
    overflow: hidden;
}

.background-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #1e3c72, #2a5298);
    z-index: -1;
    animation: gradientShift 10s infinite alternate;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}

.main-content {
    height: 40vh; /* Adjusted height to accommodate the image */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2064c4; /* Set text color to #2064c4 */
    background: rgba(255, 255, 255, 0.9); /* Light background for contrast */
    backdrop-filter: blur(5px); /* Optional: Add a blur effect */
    padding: 20px; /* Add some padding */
}

.image-container {
    margin: 20px 0; /* Add space above and below the image */
    display: flex;
    justify-content: center; /* Center the image horizontally */
    align-items: center; /* Center the image vertically */
}

.features-section {
    padding: 50px 0;
    background: rgba(255, 255, 255, 0.9); /* Light background for contrast */
    backdrop-filter: blur(10px);
    border-radius: 15px;
    margin: 20px auto; /* Centered horizontally */
    width: 90%; /* Adjusted width */
    max-width: 1200px; /* Maximum width for larger screens */
    color: #2064c4; /* Set text color to #2064c4 */
}

.animated-title {
    color: #2064c4; /* Set title color to #2064c4 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add subtle shadow */
}

.animated-subtitle {
    color: #2064c4; /* Set subtitle color to #2064c4 */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Optional: Add subtle shadow */
}

.animated-button {
    margin-top: 20px;
    color: white; /* Set button text color to white for contrast */
}
</style>