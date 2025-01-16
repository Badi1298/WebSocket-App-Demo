import time
import asyncio
import websockets

async def send_statue_id():
    uri = "ws://192.168.58.117:8000"
    async with websockets.connect(uri) as websocket:
        while True:
            statue_id = input("Enter statue identifier (e.g., statue_1): ")
            await websocket.send(statue_id)
            print(f"Sent: {statue_id}")

asyncio.run(send_statue_id())
