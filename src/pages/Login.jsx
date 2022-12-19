import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, isLoading, error } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
        await login(email, password)
	};

	return (
		<form
			className="login"
			onSubmit={handleSubmit}
		>
			<h3>Log in</h3>

			<label>
				Email:
				<input
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>

			<label>
				Password:
				<input
					type="passqord"
					name="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			<button disabled={isLoading}>Log in</button>
            {error && <div className="error">{error}</div>}
		</form>
	);
};
