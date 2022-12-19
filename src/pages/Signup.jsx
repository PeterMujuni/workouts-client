import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const {signup, error, isLoading } = useSignup()

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(email, password)
	};

	return (
		<form
			className="signup"
			onSubmit={handleSubmit}
		>
			<h3>Sign up</h3>

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
			<button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
		</form>
	);
};
