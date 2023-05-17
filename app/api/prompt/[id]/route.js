import { ConnectDB } from '@utils/database';
import Prompt from '@models/prompt';

// GET To READ

export const GET = async (request, { params }) => {
	try {
		await ConnectDB();
		const prompt = await Prompt.findById(params.id).populate('creator');
		if (!prompt) return new Response('Prompt not found', { status: 404 });

		return new Response(JSON.stringify(prompt), {
			status: 200,
		});
	} catch (error) {
		return new Response('Failed to fetch', { status: 500 });
	}
};
// PATCH uodate it
export const PATCH = async (request, { params }) => {
	const { prompt, tag } = await request.json();

	try {
		await ConnectDB();

		const exisitingPrompt = await Prompt.findById(params.id);

		if (!exisitingPrompt)
			return new Response('Prompt not found', { status: 404 });

		exisitingPrompt.prompt = prompt;
		exisitingPrompt.tag = tag;

		await exisitingPrompt.save();

		return new Response(JSON.stringify(exisitingPrompt), { status: 200 });
	} catch (error) {
		return new Response('Failed to update the prompt', { status: 500 });
	}
};
// Delete TO delete
export const DELETE = async ({ params }) => {
	try {
		await ConnectDB();

		await Prompt.findByIdAndRemove(params.id);

		return new Response('Prompt deleted', { status: 200 });
	} catch (error) {
		return new Response('Failed to delete prompt', { status: 500 });
	}
};
