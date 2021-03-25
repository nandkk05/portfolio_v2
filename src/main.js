import { createApp } from 'vue'
import App from './App.vue'
import Agastya from "agastya";

const agastya = new Agastya("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQwZThhN2Mta2duZTJ5eTVwNCIsIm9yZ2FuaXphdGlvbklkIjoiZDBlOGE3Yy1sMTRldmdwZWpuIiwic2NvcGVzIjoib3JnOnJlYWQsb3JnOnVwZGF0ZSxvcmc6ZGVsZXRlLG9yZzpiaWxsaW5nOnJlYWQsb3JnOmJpbGxpbmc6dXBkYXRlLG9yZzppbnZvaWNlczpyZWFkLG9yZzpzb3VyY2VzOnJlYWQsb3JnOnNvdXJjZXM6Y3JlYXRlLG9yZzpzb3VyY2VzOnVwZGF0ZSxvcmc6c291cmNlczpkZWxldGUsb3JnOnN1YnNjcmlwdGlvbnM6cmVhZCxvcmc6c3Vic2NyaXB0aW9uczp1cGRhdGUsb3JnOnN1YnNjcmlwdGlvbnM6Y3JlYXRlLG9yZzpwbGFuczpyZWFkLG9yZzphcGkta2V5OnJlYWQsb3JnOmFwaS1rZXk6dXBkYXRlLG9yZzphcGkta2V5OmRlbGV0ZSxvcmc6YXBpLWtleTpjcmVhdGUsb3JnOmFwaS1rZXktbG9nczpyZWFkLG9yZzpkb21haW46cmVhZCxvcmc6ZG9tYWluOnVwZGF0ZSxvcmc6ZG9tYWluOmRlbGV0ZSxvcmc6ZG9tYWluOmNyZWF0ZSxvcmc6ZG9tYWluOnZlcmlmeSxvcmc6d2ViaG9vazpyZWFkLG9yZzp3ZWJob29rOnVwZGF0ZSxvcmc6d2ViaG9vazpkZWxldGUsb3JnOndlYmhvb2s6Y3JlYXRlLG9yZzptZW1iZXJzaGlwOnJlYWQsb3JnOm1lbWJlcnNoaXA6dXBkYXRlLG9yZzptZW1iZXJzaGlwOmRlbGV0ZSxvcmc6bWVtYmVyc2hpcDpjcmVhdGUsYXBpOnRyYW5zbGF0ZSxhcGk6bGFuZ3VhZ2UtZGV0ZWN0LGFwaTpyZWFkLWFsb3VkLGFwaTpyZWFkZXIsYXBpOmRlc2NyaWJlLGFwaTpvY3IsYXBpOmNvbGxlY3QsYXBpOmFnZ3JlZ2F0ZS1kYXRhIiwiaWF0IjoxNjE2NDgxNzU2LCJleHAiOjg3OTg4MjA1MjU0NjAsImlzcyI6Im9zd2FsZGxhYnNwbGF0Zm9ybSIsInN1YiI6ImFwaS1rZXkiLCJqdGkiOiJlMjY0M2VlYWY1YmEifQ.gQCXCj7pVddmma0in3qgbnK39QsMYZgJ5Lq57hdcv1k");

agastya.open(); // Open the Agastya widget
agastya.api("enableMode", "read-aloud"); // Start read aloud mode
agastya.secureTrack({ hello: "world" }); // Track a custom event

agastya.open(); // Opens the widget
agastya.close(); // Closes the widget
agastya.toggle(); // Opens if closed, closes if opened
    

createApp(App).mount('#app')
