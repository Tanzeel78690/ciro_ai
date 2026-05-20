import axios from "axios"

export const LAPTOP_IP = "192.168.0.107"

export const API_BASE_URL = `http://${LAPTOP_IP}:8000/api`
export const WS_BASE_URL = `ws://${LAPTOP_IP}:8000/ws/crisis/`

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})