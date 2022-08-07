import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListBooks from './pages/ListBooks';
import Login from './pages/Login';
import PinjamBuku from './pages/pinjambuku';
import KembalikanBuku from './pages/kembalikanbuku';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import HistoryPeminjaman from './pages/HistoryPeminjaman';
import Home from './pages/Home';

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route
				path="/book"
				element={
					<ProtectedRoute>
						<ListBooks />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/detail"
				element={
					<ProtectedRoute>
						<ListBooks />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/pinjambuku"
				element={
					<ProtectedRoute>
						<PinjamBuku />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/kembalikanbuku"
				element={
					<ProtectedRoute>
						<KembalikanBuku />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/history_peminjaman"
				element={
					<ProtectedRoute>
						<HistoryPeminjaman />
					</ProtectedRoute>
				}
			/>
			<Route path="/daftaruser" element={<PinjamBuku />} />
		</Routes>
	);
}
export default Router;
