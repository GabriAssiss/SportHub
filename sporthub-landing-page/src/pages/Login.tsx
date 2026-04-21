import LoginAside from "../components/LoginAside";
import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
        <main className="min-h-screen grid lg:grid-cols-2 bg-white text-gray-900">
            <LoginAside />
            <LoginForm />
        </main>
    );
}