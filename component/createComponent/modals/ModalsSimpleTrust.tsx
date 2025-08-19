import { Modal, View, Text, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";

export type ModalsSimpleTrustProps = {
	visible: boolean;
	onClose: () => void;
};

const ModalsSimpleTrust = ({ visible, onClose }: ModalsSimpleTrustProps) => {
	return (
		<Modal
			visible={visible}
			transparent
			animationType="fade"
			onRequestClose={onClose}
		>
			<View className="flex-1 justify-center items-center bg-black/70">
				<BlurView
					intensity={60}
					tint="dark"
					className="rounded-lg w-[85%]  border-gray-500 shadow-2xl p-6 bg-black/60"
					style={{
						alignSelf: "center",
						backgroundColor: "rgba(0,0,0,0.6)",
					}}
				>
					<Text className="text-lg font-bold text-green-200 mb-2 text-center">
						1. Simple Trust <Text className="text-white text-xl">🏳️</Text>
					</Text>
					<View>
						<Text className="mb-5">
							<Text className="font-bold text-green-300">Step 1.</Text> <Text className="text-white">Select a topic for your image battle.</Text>
						</Text>
						<Text className="mb-5">
							<Text className="font-bold text-green-300">Step 2.</Text> <Text className="text-white">Decide on a battlefield for your match.</Text>
						</Text>
						<Text className="mb-5">
							<Text className="font-bold text-green-300">Step 3.</Text> <Text className="text-white">You’ll receive a code to connect with another player.</Text>
						</Text>
						<Text className="mb-5">
							<Text className="font-bold text-green-300">Step 4.</Text> <Text className="text-white">Once connected, both players choose their own images for each round, based on the topic.</Text>
						</Text>
						<Text className="mb-5">
							<Text className="font-bold text-green-300">Step 5.</Text> <Text className="font-bold text-green-200">You can always see your own selected images for each round.</Text>
						</Text>
						<Text className="mb-5">
							<Text className="font-bold text-green-300">Step 6.</Text> <Text className="text-white">You play rock, paper, scissors.</Text>
						</Text>
						<Text className="mb-5">
							<Text className="font-bold text-green-300">Step 7.</Text> <Text className="text-white">If you win, you get to see the opponent’s image for that round.</Text>
						</Text>
						<Text className="mb-5">
							<Text className="font-bold text-green-300">Step 8.</Text> <Text className="text-white">If you lose, your opponent sees nothing.</Text>
						</Text>
					</View>
					<TouchableOpacity
						className="mt-4 bg-green-500 px-6 py-2 rounded-full items-center"
						onPress={onClose}
					>
						<Text className="text-white font-bold">Close</Text>
					</TouchableOpacity>
				</BlurView>
			</View>
		</Modal>
	);
};

export default ModalsSimpleTrust;


