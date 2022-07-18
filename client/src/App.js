import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Main from "./components/main";
import Signup from "./components/signup";
import Login from "./components/login";
import EmailVerify from "./components/email";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
		</Routes>
	);
}

export default App;